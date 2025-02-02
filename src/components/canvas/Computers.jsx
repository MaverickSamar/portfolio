import React, { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF, Html } from '@react-three/drei'
import CanvasLoader from '../Loader'
import Terminal from './Terminal'

const Computers = ({ isMobile, cameraPosition }) => {
  const desktop = useGLTF('/desktop_pc/scene.gltf');
  const monitorRef = useRef();

  const monitorPosition = isMobile ? [0, -2.5, -1] : [0, -3.25, -1.5];
  const distance = Math.sqrt(
    Math.pow(cameraPosition[0] - monitorPosition[0], 2) +
    Math.pow(cameraPosition[1] - monitorPosition[1], 2) +
    Math.pow(cameraPosition[2] - monitorPosition[2], 2)
  );

  const isZoomedIn = distance < 5;
  return (
    <mesh>
      <hemisphereLight 
        intensity={0.15}
        groundColor="black" 
      />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 20, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={desktop.scene}
        scale={isMobile ? 0.40 : 0.70}
        position={isMobile ? [0, -2.5, -1] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [cameraPosition, setCameraPosition] = useState([20, 3, 5]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: true}}  
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          onChange={(e) => setCameraPosition(e.target.object.position.toArray())}
        />
        <Computers isMobile={isMobile} cameraPosition={cameraPosition} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas