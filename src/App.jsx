import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Suspense } from 'react';
import { Html, PointerLockControls } from '@react-three/drei';
import Studio from './components/Studio';
import Player from './components/Player';
import PortfolioScreen from './components/PortfolioScreen';

function ContactForm() {
  // No R3F hooks here, just HTML
  return (
    <form name="contact" method="POST" data-netlify="true" style={{ background: 'white', padding: 10 }}>
      <input type="hidden" name="form-name" value="contact" />
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  );
}

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      {/* Contact form rendered in 3D space */}
      <Html style={{ position: 'absolute', top: 10, right: 10 }}>
        <ContactForm />
      </Html>
      <Canvas shadows camera={{ position: [0, 1.6, 5], fov: window.innerWidth < 768 ? 75 : 60 }}>
        <Suspense fallback={<Html><div style={{ color: 'white', textAlign: 'center' }}>Loading Studio...</div></Html>}>
          <Physics>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.3} castShadow />
            <Studio />
            <Player />
            <PortfolioScreen url="https://your-portfolio-link.com" />
            <PointerLockControls />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
