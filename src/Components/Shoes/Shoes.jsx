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
  ScrollControls,
  Scroll,
  Text,
  Foo,
  Html,
} from "@react-three/drei";

import Shard from "../../Assets/background/bg_shard_alt.svg";
function Shoes() {
  const [camera, setCamera] = useState(4);

  //useEffect
  useEffect(() => {
    // // set height of the svg path as constant
    const svg = document.getElementById("svgPath");
    const length = svg.getTotalLength();

    // start positioning of svg drawing
    svg.style.strokeDasharray = length;

    const wrapper = document.getElementById("shoeWrapper");

    // hide svg before scrolling starts
    svg.style.strokeDashoffset = length;
    const speed = 20;
    const offset = 450;
    console.log(length);
    window.addEventListener("scroll", function () {
      const scrollpercent =
        (wrapper.getBoundingClientRect().top / wrapper.scrollHeight) * 100;

      let draw = 100 - scrollpercent;
      console.log(scrollpercent);
      //console.log(wrapper.clientHeight);
      //console.log(wrapper.getBoundingClientRect().top);
      setCamera(scrollpercent);
      // Reverse the drawing when scroll upwards
      svg.style.strokeDashoffset = length + offset - draw * speed;
    });
  }, []);

  return (
    <div
      id='shoeWrapper'
      className=' min-h-screen flex flex-col    bg-no-repeat bg-center bg-kickto-dark object-cover     py-24  h-screen'>
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
          className='drop-shadow   ml-24 md:ml-48 sm:text-9xl text-6xl italic  font-extrabold bg-yellow-200  bg-gradient-to-r from-[#FF8B3E] to-[#C41716] bg-clip-text text-transparent'>
          FITNESS
        </h2>

        <Canvas
          className=' w-full pt-36'
          data-aos='fade-down'
          data-aos-delay='500'
          data-aos-duration='1000'
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 0, 4], fov: 50 }}>
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
          <Environment preset='city' />{" "}
        </Canvas>
        <h2
          data-aos='fade-left'
          data-aos-delay='800'
          className='  uppercase  drop-shadow md:mr-36    ml-24   sm:text-9xl text-6xl italic  font-extrabold bg-yellow-200  bg-gradient-to-r from-[#FF8B3E] to-[#C41716] bg-clip-text text-transparent'>
          SocialFi
        </h2>
      </div>
    </div>
  );
}

export default Shoes;
