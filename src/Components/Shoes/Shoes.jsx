import GMT from "../../Assets/tokens/Coin2 blue.png";
import GST from "../../Assets/tokens/Coin sexc orange.png";
import React, { Suspense, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Model from "../Model";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  useGLTF,
  PresentationControls,
  Environment,
  ContactShadows,
  Html,
} from "@react-three/drei";

import Shard from "../../Assets/background/bg_shard.svg";
function Shoes() {
  //useEffect
  useEffect(() => {}, []);

  return (
    <div className=' min-h-screen flex flex-col    bg-no-repeat bg-center bg-kickto-dark object-cover     py-24  h-screen'>
      <img
        data-aos='zoom-in'
        src={Shard}
        data-aos-delay='500'
        className='w-full h-full absolute  '
        data-aos-duration='500'
      />
      <div className='sm:flex  h-full items-center align-middle'>
        <h2
          data-aos='fade-right'
          data-aos-delay='800'
          className='drop-shadow -mt-44  md:ml-36 text-9xl italic  font-extrabold bg-yellow-200  bg-gradient-to-r from-[#FF8B3E] to-[#C41716] bg-clip-text text-transparent'>
          FITNESS
        </h2>
        <Canvas
          className=' '
          data-aos='fade-down'
          data-aos-delay='500'
          data-aos-duration='1000'
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 0, 4], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            shadow-mapSize={[536, 512]}
            castShadow
          />
          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
            <Model rotation={[-Math.PI / 0, -1, 0]} scale={0.06} />
          </PresentationControls>
          <ContactShadows
            position={[0, -0.6, 0]}
            opacity={0.5}
            scale={10}
            blur={2.5}
            far={4}
          />
          <Environment preset='city' />
        </Canvas>
        <h2
          data-aos='fade-left'
          data-aos-delay='800'
          className='  uppercase -mt-44 drop-shadow md:mr-36 text-9xl italic  font-extrabold bg-yellow-200  bg-gradient-to-r from-[#FF8B3E] to-[#C41716] bg-clip-text text-transparent'>
          SocialFi
        </h2>
      </div>
    </div>
  );
}

export default Shoes;
