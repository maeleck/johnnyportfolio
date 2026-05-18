
WITH cteInitData AS (
  SELECT 
    person_id, 
    -- FIX: Forces NULLs to 0 so they can be processed as standard unmapped concepts
    COALESCE(condition_concept_id, 0) AS condition_concept_id, 
    condition_start_date,
    COALESCE(condition_end_date, condition_start_date + INTERVAL '1 day') AS condition_end_date
  FROM staging_pace_controls_ehr.condition_occurrence
),
cteMaxEnd AS (
  SELECT 
    person_id, 
    condition_concept_id, 
    condition_start_date, 
    condition_end_date,
    MAX(condition_end_date) OVER (
        PARTITION BY person_id, condition_concept_id 
        ORDER BY condition_start_date, condition_end_date
        ROWS BETWEEN UNBOUNDED PRECEDING AND 1 PRECEDING
    ) AS max_prior_end_date
  FROM cteInitData
),
cteStartFlags AS (
  SELECT 
    person_id, 
    condition_concept_id, 
    condition_start_date, 
    condition_end_date,
    CASE 
      WHEN max_prior_end_date IS NULL OR condition_start_date > max_prior_end_date THEN 1 
      ELSE 0 
    END AS is_start_of_era
  FROM cteMaxEnd
),
cteEraGroups AS (
  SELECT 
    person_id, 
    condition_concept_id, 
    condition_start_date, 
    condition_end_date,
    SUM(is_start_of_era) OVER (
        PARTITION BY person_id, condition_concept_id 
        ORDER BY condition_start_date, condition_end_date
        ROWS UNBOUNDED PRECEDING
    ) AS era_group_id
  FROM cteStartFlags
)
INSERT INTO staging_pace_controls_ehr.condition_era (
  condition_era_id, 
  person_id, 
  condition_concept_id, 
  condition_era_start_date, 
  condition_era_end_date, 
  condition_occurrence_count
)
SELECT 
  ROW_NUMBER() OVER (ORDER BY person_id) AS condition_era_id, 
  person_id, 
  condition_concept_id, 
  MIN(condition_start_date) AS condition_era_start_date, 
  MAX(condition_end_date) AS condition_era_end_date, 
  COUNT(*) AS condition_occurrence_count
FROM cteEraGroups
GROUP BY person_id, condition_concept_id, era_group_id
ORDER BY person_id, condition_concept_id;
  
  
  SELECT 
    condition_concept_id, 
    COUNT(*) as row_count,
    (CASE WHEN condition_concept_id IS NULL THEN 'Yes' ELSE 'No' END) as is_null
FROM staging_pace_controls_ehr.condition_occurrence
GROUP BY condition_concept_id
ORDER BY row_count DESC
LIMIT 10;