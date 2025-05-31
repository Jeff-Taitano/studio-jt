import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import Studio from './components/Studio';
import Player from './components/Player';
import { PointerLockControls } from '@react-three/drei';
import { Suspense } from 'react';

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas shadows camera={{ position: [0, 1.6, 5], fov: window.innerWidth < 768 ? 75 : 60 }}>
        <Suspense fallback={<div style={{ color: 'white', textAlign: 'center' }}>Loading Studio...</div>}>
          <Physics>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.3} castShadow />
            <Studio />
            <Player />
            <PointerLockControls />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
