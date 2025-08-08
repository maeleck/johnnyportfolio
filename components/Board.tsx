
import React, { useEffect } from 'react';
import { TransformWrapper, TransformComponent, useControls } from 'react-zoom-pan-pinch';
import { ContentCard } from './ContentCard';
import { PhotoCard } from './PhotoCard';
import { SECTIONS, PHOTO_DECORATIONS } from '../constants';
import { WoodGrainBackground } from './WoodGrainBackground';

// This helper component grabs the control functions from the context and passes them up
const ControlsHandler: React.FC<{ setControls: (controls: any) => void }> = ({ setControls }) => {
  const controls = useControls();
  useEffect(() => {
    setControls(controls);
  }, [controls, setControls]);
  return null;
};

interface BoardProps {
  setControls: (controls: any) => void;
  activeSectionId: string | null;
  onCardClick: (id: string) => void;
}

const BOARD_WIDTH = 2800;
const BOARD_HEIGHT = 2000;

export const Board: React.FC<BoardProps> = ({ setControls, activeSectionId, onCardClick }) => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-gray-800">
       <TransformWrapper
        initialScale={0.6}
        initialPositionX={370}
        initialPositionY={150}
        minScale={0.6}
        maxScale={0.6}
        limitToBounds={true}
        wheel={{ disabled: true }}
        pinch={{ disabled: true }}
        doubleClick={{ disabled: true }}
      >
        <ControlsHandler setControls={setControls} />
        <TransformComponent
          wrapperStyle={{ width: '100%', height: '100%' }}
          contentStyle={{ width: `${BOARD_WIDTH}px`, height: `${BOARD_HEIGHT}px` }}
        >
          <div className="relative" style={{ width: `${BOARD_WIDTH}px`, height: `${BOARD_HEIGHT}px` }}>
            <WoodGrainBackground width={BOARD_WIDTH} height={BOARD_HEIGHT} />
            
            {PHOTO_DECORATIONS.map((photo, index) => (
              <PhotoCard key={`photo-${index}`} photo={photo} />
            ))}

            {SECTIONS.map((section) => (
              <ContentCard
                key={section.id}
                section={section}
                onClick={() => onCardClick(section.id)}
                isActive={activeSectionId === section.id}
              />
            ))}
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};
