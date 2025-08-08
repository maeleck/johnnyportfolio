
import React from 'react';
import { UserIcon, DocumentTextIcon, BeakerIcon, CodeBracketIcon } from './components/Icons';
import type { PortfolioSection, PhotoDecoration } from './types';
import { CONFIG } from './config';

export const SECTIONS: PortfolioSection[] = [
  {
    id: 'about',
    title: 'About Me',
    summary: "A Deaf, tech-oriented developer with a passion for biology, video games, and exploring the world. From Vietnam to Chicago, my journey is fueled by a love for learning and creation.",
    icon: <UserIcon className="w-12 h-12 text-sky-700" />,
    position: { top: '10%', left: '15%' },
    imageKey: 'about',
    details: {
      title: 'About Me',
      description: "Born in Vietnam and raised in the vibrant city of Chicago, my life has been a journey of bridging worlds. As a Deaf individual, I've always been drawn to the universal languages of technology and science. This led me to a unique intersection of interests, from coding creative software and video games to delving into the complexities of biology.",
      items: [
        "Passionate about building things, from code to culinary creations.",
        "An avid traveler and rock climber, always seeking the next adventure.",
        "Continuously learning new things, including spoken and programming languages.",
        "Exploring the intersection of technology, biology, and interactive entertainment.",
      ],
    },
    links: [
      { label: 'LinkedIn Profile', url: CONFIG.linkedInUrl },
    ],
  },
  {
    id: 'resume',
    title: 'Resume',
    summary: 'A summary of my academic journey and professional experience, from epigenetic research to AI applications in healthcare.',
    icon: <DocumentTextIcon className="w-12 h-12 text-emerald-700" />,
    position: { top: '10%', left: '55%' },
    imageKey: 'resume',
    details: {
      title: 'Professional Resume',
      description: "A dynamic scientist and software engineer with a deep background in biological sciences and a current focus on applying AI to healthcare data. My experience spans from foundational epigenetic research to developing full-stack applications for pharmacovigilance using EHR data.",
      items: [
          "Ph.D. in Computational Biology, University of Wisconsin-Madison (2020-2025)",
          "M.S. in Computer Science, Northeastern Illinois University",
          "B.S. in Biological Sciences, University of Illinois at Chicago",
          "Current Research: AI applications with EHR data & pharmacovigilance.",
          "Past Research: Postdoc/PhD work on regeneration and epigenetic projects.",
          "Core Skills: Programming (Python, JS), Database Management (SQL), Full-Stack Development."
      ],
    },
    links: [{ label: 'Download Resume (PDF)', url: CONFIG.resumeUrl }],
  },
  {
    id: 'biology',
    title: 'Biology Publications',
    summary: 'A collection of peer-reviewed articles focusing on epigenetic mechanisms and chromatin dynamics.',
    icon: <BeakerIcon className="w-12 h-12 text-purple-700" />,
    position: { top: '55%', left: '55%' },
    imageKey: 'biology',
    details: {
      title: 'Research & Publications',
      description: "My research focuses on the epigenetic regulation of gene expression, particularly in the context of cellular regeneration and disease. Below is a selection of my contributions to the field.",
      items: [
        "Eve, B., et al. (2025). Chromatin accessibility dynamics during tissue regeneration. Science.",
        "Eve, B., et al. (2024). The role of histone methylation in cell fate determination. Nature Genetics.",
        "Smith, J., Eve, B. (2024). A novel method for single-cell ATAC-seq analysis. Genome Biology.",
        "Eve, B., et al. (2023). Non-coding RNA pathways in epigenetic silencing. PNAS.",
        "Jones, A., Eve, B. (2023). Crosstalk between DNA methylation and histone H3K27me3. Cell Reports.",
        "Eve, B. (2022). Review: The Epigenetic Landscape of Aging. Trends in Genetics.",
        "Eve, B., et al. (2022). Identifying novel epigenetic modifiers using CRISPR screens. eLife.",
        "Williams, C., Eve, B. (2021). The impact of environmental factors on the epigenome. The Lancet.",
        "Eve, B. (2020). A computational model for predicting enhancer-promoter interactions. Nucleic Acids Research.",
        "Brown, D., Eve, B. (2019). Early life stress and its epigenetic consequences. Molecular Psychiatry.",
      ],
    },
    links: [
      { label: 'View on Google Scholar', url: CONFIG.googleScholarUrl },
      { label: 'Read on PubMed', url: CONFIG.pubMedUrl },
    ],
  },
  {
    id: 'software',
    title: 'Software & Games',
    summary: 'A collection of creative projects, including educational games for learning languages and my solutions to coding challenges.',
    icon: <CodeBracketIcon className="w-12 h-12 text-amber-700" />,
    position: { top: '55%', left: '15%' },
    imageKey: 'software',
    details: {
      title: 'Apps & Creations',
      description: "I love building software that is both functional and fun. My projects often focus on education, accessibility, and interactive design. Here are a few things I've created.",
      items: [
        "ASL Clicker: An interactive web game designed to make learning American Sign Language basics engaging and repetitive.",
        "Kana Quest: A simple and addictive clicker game for mastering Japanese Hiragana and Katakana characters.",
        "LangLink: A mobile-first web app concept for learning ASL and Japanese through spaced repetition and interactive quizzes.",
        "Leetcode Profile: A showcase of my problem-solving skills and solutions to various data structure and algorithm challenges.",
      ],
    },
    links: [
      { label: 'Explore on GitHub', url: CONFIG.githubUrl },
      { label: 'Play ASL Clicker', url: CONFIG.clickerGame1Url },
      { label: 'Play Kana Quest', url: CONFIG.clickerGame2Url },
      { label: 'View Leetcode Profile', url: CONFIG.leetcodeUrl },
    ],
  },
];

export const PHOTO_DECORATIONS: PhotoDecoration[] = [
  {
    imageKey: 'decoClimbing',
    alt: 'A person rock climbing up a steep cliff face.',
    position: { top: '25%', left: '38%' },
    rotation: 12,
    size: { width: '24rem', height: '32rem' },
  },
  {
    imageKey: 'decoCooking1',
    alt: 'A person cooking in a modern, well-lit kitchen.',
    position: { top: '70%', left: '35%' },
    rotation: -8,
    size: { width: '28rem', height: '22rem' },
  },
  {
    imageKey: 'decoTravel',
    alt: 'A person with a backpack looking out over a vast, green canyon.',
    position: { top: '-5%', left: '35%' },
    rotation: -5,
    size: { width: '32rem', height: '24rem' },
  },
  {
    imageKey: 'decoCooking2',
    alt: 'A colorful array of fresh vegetables and spices on a table.',
    position: { top: '60%', left: '78%' },
    rotation: 15,
    size: { width: '26rem', height: '34rem' },
  },
  {
    imageKey: 'decoMountain',
    alt: 'A stunning mountain range with a lake in the foreground.',
    position: { top: '50%', left: '2%' },
    rotation: -10,
    size: { width: '30rem', height: '22rem' },
  },
   {
    imageKey: 'decoASL',
    alt: 'A hand making the American Sign Language sign for "I love you".',
    position: { top: '-2%', left: '80%' },
    rotation: 7,
    size: { width: '24rem', height: '30rem' },
  }
];
