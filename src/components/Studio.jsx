import { useGLTF } from '@react-three/drei';
import { useBox } from '@react-three/cannon';

function Studio() {
  const { scene } = useGLTF('/models/studio.glb');
  scene.traverse((child) => {
    if (child.isMesh && child.name.includes('wall')) {
      useBox(() => ({
        type: 'Static',
        args: [1, 1, 1], // Adjust based on mesh size
        position: child.position,
      }));
    }
  });
  return <primitive object={scene} />;
}

export default Studio;
