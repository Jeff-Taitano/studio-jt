import { useBox } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function Player() {
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [0, 1.6, 5],
    args: [0.5, 1.8, 0.5],
  }));
  useFrame(({ camera }) => {
    if (ref.current) {
      camera.position.copy(ref.current.position);
      camera.position.y += 1.6;
    }
  });
  return (
    <mesh ref={ref}>
      <capsuleGeometry args={[0.5, 1.8, 8]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

export default Player;
