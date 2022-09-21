import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GLTFDracoExportPlugin,
  MaterialLibraryPlugin,
  DirectionalLight,
} from "webgi";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { React, useEffect } from "react";
import * as THREE from "three";

const Shoe = () => {
  function addModelToBG() {
    //Variables for setup

    let container;
    let camera;
    let renderer;
    let scene;
    let box;

    function init() {
      container = document.querySelector(".scene.one");

      //Create scene
      scene = new THREE.Scene();

      const fov = 35;
      const aspect = container.clientWidth / container.clientHeight;
      const near = 0.9;
      const far = 1000;

      //Camera setup
      camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

      //Renderer
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });

      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);

      container.appendChild(renderer.domElement);

      function render() {
        renderer.render(scene, camera);
      }

      var geometry = new THREE.BoxGeometry();
      var material = new THREE.MeshNormalMaterial();
      var box = new THREE.Mesh(geometry, material);
      box.scale.set(1.0, 1.0, 1.0);
      box.position.set(0.0, 0.0, 0.0);
      scene.add(box);
      animate();
    }

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    init();

    function onWindowResize() {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }

    window.addEventListener("resize", onWindowResize);

    gsap.registerPlugin(ScrollTrigger);

    scene.rotation.set(0, 1.88, 0);
    camera.position.set(2, 0, 5);

    ScrollTrigger.defaults({
      immediateRender: false,
      ease: "power1.inOut",
      scrub: true,
    });

    let car_anim = gsap.timeline();

    // Full Height

    car_anim.to(scene.rotation, {
      y: 4.79,
      scrollTrigger: {
        trigger: ".section-two",

        endTrigger: ".section-four",
        end: "top bottom",
      },
    });

    // Slide 2

    car_anim.to(camera.position, {
      x: -0.1,
      scrollTrigger: {
        trigger: ".section-two",

        start: "top bottom",
        end: "top top",
      },
    });

    // Slide 3

    car_anim.to(scene.rotation, {
      z: 1.6,
      scrollTrigger: {
        trigger: ".section-three",

        start: "top bottom",
        end: "top top",
      },
    });

    // // Slide 4 - The problem child

    car_anim.to(scene.rotation, {
      z: 0.02,
      y: 3.1,
      scrollTrigger: {
        trigger: ".section-four",

        start: "top bottom",
        end: "top top",
      },
    });

    car_anim.to(camera.position, {
      x: 0.16,
      scrollTrigger: {
        trigger: ".section-four",

        start: "top top",
        end: "bottom top",
      },
    });
  }
  useEffect(() => {
    addModelToBG();
  }, []);
  return (
    <>
      <div className='scene one'></div>

      <section className='section-one'></section>

      <section className='section-two'></section>

      <section className='section-three'></section>

      <section className='section-four'></section>

      <section className='section-five'></section>
    </>
  );
};

export default Shoe;
