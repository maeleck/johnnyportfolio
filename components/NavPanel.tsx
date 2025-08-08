
import React from 'react';
import { SECTIONS } from '../constants';

interface NavPanelProps {
  onNavigate: (id: string) => void;
  activeSectionId: string | null;
  portfolioTitle: string;
}

export const NavPanel: React.FC<NavPanelProps> = ({ onNavigate, activeSectionId, portfolioTitle }) => {
  return (
    <div className="fixed top-4 left-4 z-30 bg-slate-800/80 backdrop-blur-md p-4 rounded-xl shadow-lg">
      <h1 className="text-xl font-bold text-white mb-4 text-center border-b border-slate-600 pb-2">{portfolioTitle}</h1>
      <div className="flex flex-col space-y-2">
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => onNavigate(section.id)}
            className={`w-full text-left px-4 py-2 rounded-md font-semibold transition-all duration-200 ${
              activeSectionId === section.id
                ? 'bg-sky-500 text-white shadow-md'
                : 'bg-slate-700 text-slate-200 hover:bg-slate-600 hover:text-white'
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>
    </div>
  );
};
