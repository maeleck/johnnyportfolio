
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
          "Ph.D. in Cellular and Molecular Pathology, University of Wisconsin-Madison (2015-2021)",
          "M.S. in Biological Science, Northeastern Illinois University",
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
      description: "My research largely focuses on the epigenetic regulation of gene expression, particularly in the context of cellular regeneration and disease. Below is a selection of my contributions to the field.",
      items: 
[
    "Duong, P., et al. (2024). CUT&Tag applied to zebrafish adult tail fins reveals a return of embryonic H3K4me3 patterns during regeneration. Epigenetics & Chromatin.",
    "Duong, P., et al. (2023). Modulation of Schwann cell homeostasis by the BAP1 deubiquitinase. Glia.",
    "Veneri, F. A., et al. (2022). A novel mouse model of CMT1B identifies hyperglycosylation as a new pathogenetic mechanism. Human Molecular Genetics.",
    "Duong, P., et al. (2021). H3K27 demethylases are dispensable for activation of polycomb-regulated injury response genes in peripheral nerve. Journal of Biological Chemistry.",
    "Sanchez, J. C., et al. (2019). High-resolution crystal structures of a myxobacterial phytochrome at cryo and room temperature. Structural Dynamics.",
    "Duong, P., & Svaren, J. (2019). Charcot-Marie-Tooth Disease. Chromatin Signaling and Neurological Disorders.",
    "Woitowich, N. C., et al. (2018). Structural basis for light control of cell development revealed by crystal structures of a myxobacterial phytochrome. IUCrJ.",
    "Ma, K., et al. (2018). Polycomb repression regulates Schwann cell proliferation and axon regeneration after nerve injury. Glia.",
    "Duncan, I. D., et al. (2017). A mutation in the Tubb4a gene leads to microtubule accumulation. Annals of Neurology.",
    "Björling, A., et al. (2015). Ubiquitous structural signaling in bacterial phytochromes. J. Phys. Chem. Lett."
]
,
    },
    links: [
     // { label: 'View on Google Scholar', url: CONFIG.googleScholarUrl },
      { label: 'Read on PubMed (WORK IN PROGRESS)', url: CONFIG.pubMedUrl },
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
        "ASL from nowhere: An interactive web game designed to make learning American Sign Language basics engaging (WIP, largely AI generated).",
        "Japanese Quest: An interactive web game for mastering Japanese sign language, Hiragana, Katakana, and Kanji characters (WIP, largely AI generated).",
        "Cosmic Incremental Game: A mobile-first web app concept for learning science through gamification (WIP, largely AI generated).",
        "Leetcode Profile: A showcase of my problem-solving skills and solutions to various data structure and algorithm challenges (Just created).",
      ],
    },
    links: [
      { label: 'Explore on GitHub', url: CONFIG.githubUrl },
      { label: 'ASL from nowhere', url: CONFIG.clickerGame1Url },
      { label: 'Japanese Quest', url: CONFIG.clickerGame2Url },
      { label: 'Cosmic Incremental Game', url: CONFIG.clickerGame3Url },
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
    size: { width: '48rem', height: '30rem' },
  }
];
