import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
  // Load model from public folder
  const { scene } = useGLTF("/src/assets/3DModel/source/laptop.glb"); // path relative to public/

  return <primitive object={scene} scale={1.5} />;
};

const PerfilModel = () => {
  return (
    // <div style={{ height: "400px", width: "100%" }}>
    <Canvas camera={{ position: [0, 1, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
    // </div>
  );
};

export default PerfilModel;
