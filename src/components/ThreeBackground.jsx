'use client';
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../hooks/useTheme';

function ParticleWave({ theme }) {
  const ref = useRef();
  
  // Generate a grid of particles
  const count = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 2;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const { clock, pointer } = state;
    const time = clock.getElapsedTime();
    
    // Animate each particle
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const x = positions[i3];
      const y = positions[i3 + 1];
      
      // Base wave movement
      const z = Math.sin(y * 2 + time * 0.5) * 0.5 + Math.sin(x * 2 + time * 0.3) * 0.2;
      
      // Mouse interaction (repulsion/attraction)
      // Convert pointer to world space roughly
      const mouseX = pointer.x * 5;
      const mouseY = pointer.y * 5;
      const dx = mouseX - x;
      const dy = mouseY - y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      // If close to mouse, push away or pull
      if (dist < 2) {
        const force = (2 - dist) * 2;
        ref.current.geometry.attributes.position.array[i3 + 2] = z + force * 0.5;
      } else {
        ref.current.geometry.attributes.position.array[i3 + 2] = z;
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
    
    // Gentle overall rotation
    ref.current.rotation.y = time * 0.05;
  });

  const color = theme === 'dark' ? '#ffffff' : '#1a1a1a';

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color={color}
        sizeAttenuation
        transparent
        opacity={0.8}
        depthWrite={false}
      />
    </points>
  );
}

const ThreeBackground = () => {
  const { theme } = useTheme();

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ParticleWave theme={theme} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
