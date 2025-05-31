import { useGLTF } from '@react-three/drei';
import { useBox } from '@react-three/cannon';

function Wall({ position }) {
  const [ref] = useBox(() => ({
    type: 'Static',
    args: [1, 1, 1], // Adjust size based on your wall geometry
    position,
  }));
  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
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
