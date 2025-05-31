import { useState } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function PortfolioScreen({ url }) {
  const [hovered, setHovered] = useState(false);
  const { scene } = useGLTF('/models/portfolio1.glb');
  scene.traverse((child) => {
    if (child.isMesh && hovered) {
      child.material = new THREE.MeshStandardMaterial({ color: 'lightblue' });
    }
  });
  return (
    <primitive
      object={scene}
      onClick={() => window.open(url, '_blank')}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
}

export default PortfolioScreen;
