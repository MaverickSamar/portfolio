import React, { useMemo } from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  // Generate random positions for each ball
  const ballPositions = useMemo(() => {
    return technologies.map(() => ({
      x: Math.random() * 50 - 1, // Random X position between -5 and 5
      y: Math.random() * 40 - 1, // Random Y position between -5 and 5
    }));
  }, []);

  return (
    <div className='w-full h-screen'>
      <BallCanvas balls={technologies.map((tech, index) => ({ ...tech, position: ballPositions[index] }))} />
    </div>
  );
};

export default SectionWrapper(Tech, "");