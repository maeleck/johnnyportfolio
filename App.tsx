
import React, { useState, useCallback } from 'react';
import { Board } from './components/Board';
import { NavPanel } from './components/NavPanel';
import { DetailPanel } from './components/DetailPanel';
import { SECTIONS } from './constants';
import { CONFIG } from './config';
import type { PortfolioSection } from './types';

export default function App() {
  const [controls, setControls] = useState<any>(null);
  const [activeSection, setActiveSection] = useState<PortfolioSection | null>(null);

  const handleNavigate = useCallback((id: string) => {
    if (!controls) return;

    const section = SECTIONS.find(s => s.id === id);
    if (section) {
      setActiveSection(section);
      const element = document.getElementById(id);
      if (element) {
        controls.zoomToElement(element, 0.85, 800, 'easeOut');
      }
    }
  }, [controls]);

  const handleCloseDetail = useCallback(() => {
    setActiveSection(null);
    if(controls) {
      controls.resetTransform(500, 'easeOut');
    }
  }, [controls]);

  return (
    <main className="w-screen h-screen font-sans">
      <NavPanel 
        onNavigate={handleNavigate}
        activeSectionId={activeSection?.id || null}
        portfolioTitle={CONFIG.portfolioTitle}
      />
      <Board 
        setControls={setControls}
        activeSectionId={activeSection?.id || null}
        onCardClick={handleNavigate}
      />
      <DetailPanel 
        section={activeSection}
        onClose={handleCloseDetail}
      />
    </main>
  );
}