import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CanvasLoader from '../Loader';
import Balls from './Balls.jsx';

const BallCanvas = ({ balls }) => {
  return (
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 15], fov: 120 }} // Adjust camera position and FOV
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Balls balls={balls} />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;