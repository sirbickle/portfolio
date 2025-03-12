import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Moon = () => {
  const moon = useGLTF("./moon/scene.gltf");

  // Ajustando a posição da lua um pouco mais para baixo
  return (
    <primitive 
      object={moon.scene} 
      scale={0.5} 
      position={[0, -1.5, 0]}  // Ajuste da posição Y para -1.5
      rotation-y={0} 
    />
  );
};

const MoonCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,  // Mesma configuração do EarthCanvas
        near: 0.1,
        far: 200, // Distância de visualização
        position: [-4, 3, 6],  // Mesma posição da câmera
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Moon />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default MoonCanvas;
