import React, {Suspense, useEffect, useMemo} from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, Float, Html, OrbitControls, Preload } from '@react-three/drei'
import { BoxGeometry, MathUtils } from 'three';
import Loader2 from '../Loader2';


const ProjectScreen = ({ url, name, img }) => {

  return (
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true}}  
    >
      <Suspense fallback={<Loader2/>}>
        <OrbitControls
          enableZoom={false}
        />
        <hemisphereLight groundColor="red" />

        <Float floatIntensity={6} rotationIntensity={2} autoInvalidate>
        <Html
            style={{ userSelect: 'none' }}
            castShadow
            receiveShadow
            occlude="blending"
            transform
        >
            {name === 'Singular' ? 
                <iframe
                    title={`Project: ${url}`}
                    width={400}
                    height={300}
                    src={img}
                    onClick={window.open('https://it.singular.shop', '_blank')}
                />
            :
            <iframe
                title={`Project: ${url}`}
                width={600}
                height={400}
                src={url}
            />
            }
        </Html>
        </Float>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ProjectScreen