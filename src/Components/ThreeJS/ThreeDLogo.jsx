import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  Html,
  OrbitControls,
  Text3D,
  Center,
  Environment,
} from "@react-three/drei";
import { Suspense } from "react";

const ThreeDLogo = () => {
  return (
    <Canvas
      className="about__image-canvas"
      camera={{ position: [0, 0, 15], fov: 50 }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />

      <Suspense
        fallback={
          <Html>
            <p>Loading...</p>
          </Html>
        }
      >
        <Center>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={6} // smaller size for better fit
            height={0.7}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.03}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            A
            <meshStandardMaterial color="#e11920" />
          </Text3D>
        </Center>
        <Environment preset="sunset" />
      </Suspense>

      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};

export default ThreeDLogo;
