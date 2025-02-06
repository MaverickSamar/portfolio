import React from 'react';
import { Decal, Float, useTexture } from '@react-three/drei';

const Ball = ({ imgUrl, position }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2} autoInvalidate>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh position={[position.x, position.y, 0]} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const Balls = ({ balls }) => {
  return (
    <>
      {balls.map((ball, index) => (
        <Ball key={ball.name} imgUrl={ball.icon} position={ball.position} />
      ))}
    </>
  );
};

export default Balls;