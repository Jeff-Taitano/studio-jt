import { useState } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function PortfolioScreen({ url }) {
  const [hovered, setHovered] = useState(false);
  const { scene } = useGLTF('/models/portfolio1.glb');
  return (
    <primitive
      object={scene}
      onClick={() => window.open(url, '_blank')}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      material={hovered ? new THREE.MeshStandardMaterial({ color: 'lightblue' }) : null}
    />
  );
}

export default PortfolioScreen;
