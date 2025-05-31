import { useGLTF } from '@react-three/drei';
import { useBox } from '@react-three/cannon';

function Wall({ position }) {
  const [ref] = useBox(() => ({
    type: 'Static',
    args: [1, 5, 0.2], // Adjusted for typical wall: width=1, height=5, depth=0.2
    position,
  }));
  return (
    <mesh ref={ref} visible={false}> {/* Invisible for now */}
      <boxGeometry args={[1, 5, 0.2]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
}

function Studio() {
  const { scene } = useGLTF('/models/studio.glb');
  const walls = scene.children.filter(
    (child) => child.isMesh && child.name.toLowerCase().includes('wall')
  );
  return (
    <>
      <primitive object={scene} />
      {walls.map((child, index) => (
        <Wall key={index} position={child.position.toArray()} />
      ))}
    </>
  );
}

export default Studio;
