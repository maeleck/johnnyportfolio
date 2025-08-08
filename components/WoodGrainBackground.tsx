import React from 'react';

interface WoodGrainBackgroundProps {
  width: number;
  height: number;
}

/**
 * A component that renders a procedurally generated SVG wood grain texture.
 * It uses SVG filters to create a realistic and non-repeating pattern.
 */
export const WoodGrainBackground: React.FC<WoodGrainBackgroundProps> = ({ width, height }) => {
  const plankWidth = 150;
  const numPlanks = Math.ceil(width / plankWidth);

  const plankLines = [];
  // Start from 1 to avoid drawing a line at the very edge
  for (let i = 1; i < numPlanks; i++) {
    plankLines.push(
      <line
        key={`plank-line-${i}`}
        x1={i * plankWidth}
        y1={0}
        x2={i * plankWidth}
        y2="100%"
        stroke="#000000"
        strokeWidth="2"
        strokeOpacity="0.25"
      />
    );
  }

  return (
    // The background is absolutely positioned to fill its parent container.
    // A z-index of -1 places it behind all other content (the paper cards).
    <div
      className="absolute top-0 left-0 w-full h-full -z-10"
      style={{ backgroundColor: '#6b4328' }} // A dark base color in case SVG fails
      aria-hidden="true" // Decorative, so hide from screen readers
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="woodgrain-filter">
            {/* 
              feTurbulence creates the base noise.
              baseFrequency is set to be streaky vertically, mimicking wood grain.
              numOctaves adds detail to the noise.
              The 'seed' ensures the pattern is the same on every render.
            */}
            <feTurbulence type="fractalNoise" baseFrequency="0.01 0.2" numOctaves="2" seed="10" result="noise" />

            {/*
              Desaturate the noise to make it more of a grayscale texture.
              This allows us to color it more predictably.
            */}
            <feColorMatrix type="saturate" values="0.4" in="noise" result="desaturated-noise" />
            
            {/*
              feBlend mixes the generated texture with the source graphic (the base color rectangle).
              'multiply' darkens the base color with the texture, creating a natural look.
            */}
            <feBlend in="SourceGraphic" in2="desaturated-noise" mode="multiply" />
          </filter>
        </defs>
        
        {/* A base rectangle with a mid-tone wood color */}
        <rect width="100%" height="100%" fill="#a07456" />

        {/* 
          A second rectangle on top that applies the filter.
          This overlays the texture onto the base color rectangle.
        */}
        <rect width="100%" height="100%" filter="url(#woodgrain-filter)" opacity="0.35" />

        {/* Render the plank lines on top of the textured background */}
        <g>{plankLines}</g>
      </svg>
    </div>
  );
};
