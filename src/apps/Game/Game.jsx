import React, { useRef } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import * as THREE from 'three'

function Box(props) {
  // Зверніть увагу, що ми використовуємо `useRef`, щоб мати можливість маніпулювати об'єктом на сцені.
  const meshRef = useRef()

  // `useFrame` - це кастомний хук, який дозволяє нам змінювати стан сцени на кожному кадрі.
  useFrame(() => {
    meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.y += 0.01
  })

  return (
    <mesh {...props} ref={meshRef}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'hotpink'} />
    </mesh>
  )
}

function Game() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.8} position={[5, 25, 20]} angle={0.2} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  )
}

export default Game
