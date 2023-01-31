import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stage, OrbitControls, useGLTF } from '@react-three/drei'

export const Model = ({ model }: { model: string }) => {
  const { scene } = useGLTF(model)

  return (
    <primitive object={scene} />
  )
}

export const ThreeDScene = ({ model }: { model: string }) => {

  return (
    <Canvas>
      <Suspense fallback={null}>
        <Model {...{ model }}/>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.05}
          enableZoom={false}
          makeDefault
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Suspense>
    </Canvas>
 )
}