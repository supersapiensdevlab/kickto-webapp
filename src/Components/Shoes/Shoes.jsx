import GMT from "../../Assets/tokens/Coin2 blue.png";
import GST from "../../Assets/tokens/Coin sexc orange.png";
import React, { Suspense, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Model from "../Model";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Shoes() {
  //useEffect
  useEffect(() => {}, []);

  return (
    <div className=' min-h-screen flex flex-col gap-4  bg-shard-back bg-cover    gap-y-6 h-screen'>
      <Canvas className='canvas   '>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
        <ambientLight intensity={0.5} />

        <directionalLight position={[0, 10, 10]} intensity={1} />
        <directionalLight position={[0, 10, -10]} intensity={1} />

        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Shoes;
