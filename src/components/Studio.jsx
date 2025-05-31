import { useGLTF } from '@react-three/drei';
import { useBox } from '@react-three/cannon';

function Wall({ position }) {
  useBox(() => ({
    type: 'Static',
    args: [1, 1, 1],
    position,
  }));
  return null;
}

function Studio() {
  const { scene } = useGLTF('/models/studio.glb');
  return (
    <>
      <primitive object={scene} />
      {scene.children
        .filter((child) => child.isMesh && child.name.includes('wall'))
        .map((child, index) => (
          <Wall key={index} position={child.position.toArray()} />
        ))}
    </>
  );
}

export default Studio;
