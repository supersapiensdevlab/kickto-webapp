/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import {
  useGLTF,
  PresentationControls,
  Environment,
  ContactShadows,
  Html,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import PolygonToken from "../Assets/PolygonToken";
export default function Model(props) {
  const { nodes, materials } = useGLTF("/shoes.gltf");
  const ref = useRef();
  const scroll = useScroll();
  const rsqw = (t, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) =>
    (a / Math.atan(1 / delta)) *
    Math.atan(Math.sin(2 * Math.PI * t * f) / delta);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // const r1 = scroll.range(0 / 4, 1 / 4);
    // const r2 = scroll.range(1 / 4, 1 / 4);
    // const r3 = scroll.visible(4 / 5, 1 / 5);
    // ref.current.rotation.x = Math.PI - (Math.PI / 2) * rsqw(r1) + r2 * 0.33;
    // ref.current.rotation.x = Math.PI - (Math.PI / 2) * rsqw(r1) - r2 * 0.39;
    ref.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8;
    ref.current.rotation.y = Math.sin(t / 4) / 8;
    ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });
  return (
    <group {...props} ref={ref} {...props} dispose={null}>
      <group>
        <group scale={1}>
          <mesh
            geometry={nodes.rtfkt_aj1_blinn4SG.geometry}
            material={materials.blinn4SG}></mesh>
          <mesh
            geometry={nodes.rtfkt_aj1_blinn5SG.geometry}
            material={materials.blinn5SG}></mesh>
          <mesh
            geometry={nodes.rtfkt_aj1_bladeblinn31SG.geometry}
            material={materials["blade:blinn31SG"]}></mesh>
          <mesh
            geometry={nodes.rtfkt_aj1_blinn3SG.geometry}
            material={materials.blinn3SG}></mesh>
          <mesh
            geometry={nodes.rtfkt_aj1_blinn6SG.geometry}
            material={materials.blinn6SG}
          />
          <mesh
            geometry={nodes.rtfkt_aj1_blinn7SG.geometry}
            material={materials.blinn7SG}
          />
          <mesh
            geometry={nodes.rtfkt_aj1_blinn2SG.geometry}
            material={materials.blinn2SG}
          />
          <mesh
            geometry={nodes.rtfkt_aj1_blinn1SG.geometry}
            material={materials.blinn1SG}>
            {/* <Html
              scale={5}
              rotation={[Math.PI / 23, -0.3, 0]}
              position={[-10, 20, 3]}
              transform
              occlude>
              <div className='annotation  bg-gradient-to-r from-kickto-secondary to-kickto-primary font-bold  border-white border  '>
                <PolygonToken size={10} />
                10
                <span style={{ fontSize: "1.5em" }}> </span>
              </div>
            </Html> */}
          </mesh>
          <mesh
            geometry={nodes.rtfkt_aj1_Material001.geometry}
            material={materials["Material.001"]}></mesh>
          <mesh
            geometry={nodes.rtfkt_aj1_Material002.geometry}
            material={materials["Material.002"]}></mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/shoes.gltf");
