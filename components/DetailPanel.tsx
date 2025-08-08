
import React from 'react';
import type { PortfolioSection } from '../types';
import { ExternalLinkIcon } from './Icons';

interface DetailPanelProps {
  section: PortfolioSection | null;
  onClose: () => void;
}

export const DetailPanel: React.FC<DetailPanelProps> = ({ section, onClose }) => {
  return (
    <div className={`fixed top-0 right-0 h-full w-full md:w-96 lg:w-[450px] bg-slate-800/80 backdrop-blur-lg text-white p-6 shadow-2xl transition-transform duration-500 ease-in-out z-40 ${section ? 'translate-x-0' : 'translate-x-full'}`}>
      {section && (
        <div className="flex flex-col h-full">
          <div className="flex-shrink-0">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              aria-label="Close details"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-3xl font-bold font-serif mb-1 text-sky-300">{section.details.title}</h2>
            <p className="text-slate-300 mb-6">{section.details.description}</p>
          </div>
          
          <div className="flex-grow overflow-y-auto pr-2">
            {section.details.items && (
              <ul className="space-y-3 mb-6 list-disc list-inside text-slate-200">
                {section.details.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
          
          <div className="flex-shrink-0 border-t border-slate-600 pt-4">
            <h3 className="text-lg font-semibold mb-3 text-slate-200">Links</h3>
            <div className="space-y-3">
              {section.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-slate-700 hover:bg-sky-600 p-3 rounded-md transition-all duration-300 group"
                >
                  <ExternalLinkIcon className="h-5 w-5 text-sky-400 group-hover:text-white transition-colors"/>
                  <span className="font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
