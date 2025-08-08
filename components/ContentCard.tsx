
import React from 'react';
import type { PortfolioSection } from '../types';
import { PushPinIcon } from './Icons';

interface ContentCardProps {
  section: PortfolioSection;
  onClick: () => void;
  isActive: boolean;
}

export const ContentCard: React.FC<ContentCardProps> = ({ section, onClick, isActive }) => {
  const animationClass = {
    about: 'animate-flutter-about',
    resume: 'animate-flutter-resume',
    biology: 'animate-flutter-biology',
    software: 'animate-flutter-software',
  }[section.id] || '';

  // The wrapper handles position and scaling on hover/active states.
  return (
    <div
      className={`absolute w-[48rem] h-[36rem] cursor-pointer group transition-transform duration-300 transform hover:scale-105 ${isActive ? 'z-20 scale-105 shadow-2xl' : 'z-10'}`}
      style={{ top: section.position.top, left: section.position.left }}
      onClick={onClick}
    >
      {/* The card itself handles the rotation and fluttering animation, which is defined in index.html */}
      <div
        id={section.id}
        className={`w-full h-full ${animationClass}`}
      >
        <div className={`relative w-full h-full bg-amber-50 border border-amber-200 shadow-lg rounded-sm flex flex-col overflow-hidden transition-all duration-300 ${isActive ? 'border-sky-500 border-2' : 'group-hover:border-sky-400'}`}>
          <PushPinIcon />
          
          <div className="w-full h-1/2 flex-shrink-0">
            <img src={section.imageUrl} alt={`${section.title} placeholder image`} className="w-full h-full object-cover"/>
          </div>

          <div className="p-8 flex flex-col flex-grow justify-between">
            <div>
              <div className="flex items-center gap-6 mb-4">
                {section.icon}
                <h3 className="font-serif font-bold text-4xl text-slate-800">{section.title}</h3>
              </div>
              <p className="font-serif text-xl text-slate-600 line-clamp-4">
                {section.summary}
              </p>
            </div>
            <div className="text-right text-lg text-sky-800 font-semibold opacity-0 group-hover:opacity-100 transition-opacity mt-4">
              Click to view details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
