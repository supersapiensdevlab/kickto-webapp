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
// import shoe from "./kickto_shoes.glb";
gsap.registerPlugin(ScrollTrigger);

async function setupViewer() {
  const viewer = new ViewerApp({
    canvas: document.getElementById("webgi-canvas"),
    useRgbm: false,
    isAntialiased: true,
  });

  const manager = await viewer.addPlugin(AssetManagerPlugin);
  const camera = viewer.scene.activeCamera;
  const position = camera.position;
  const target = camera.target;

  // Add plugins individually.
  await viewer.addPlugin(GBufferPlugin);
  await viewer.addPlugin(new ProgressivePlugin(32));
  await viewer.addPlugin(new TonemapPlugin(!viewer.useRgbm));
  await viewer.addPlugin(SSRPlugin);
  await viewer.addPlugin(SSAOPlugin);
  await viewer.addPlugin(BloomPlugin);
  viewer.renderer.refreshPipeline();

  await manager.addFromPath("./kickto_shoes.glb");

  function setupScrollanimation() {
    const tl = gsap.timeline();

    // FIRST SECTION

    tl.to(position, {
      x: -2,
      y: 3,
      z: 2,
      scrollTrigger: {
        trigger: ".second",
        start: "top bottom",
        end: "top top",
        scrub: true,
        markers: true,

        immediateRender: false,
      },
      onUpdate,
    })

      //   .to(".section--one--container", {
      //     opacity: 0,
      //     x: 0,
      //     y: 0,
      //     z: 0,
      //     scrollTrigger: {
      //       trigger: ".second",
      //       start: "top bottom",
      //       end: "top 80%",
      //       scrub: 1,
      //       markers: true,
      //       immediateRender: false,
      //     },
      //   })
      //   .to(target, {
      //     x: 0,
      //     y: 4,
      //     z: -10,
      //     scrollTrigger: {
      //       trigger: ".second",
      //       start: "top bottom",
      //       end: "top top",
      //       scrub: true,
      //       markers: true,
      //       immediateRender: false,
      //     },
      //   })

      // LAST SECTION

      .to(position, {
        x: 6,
        y: 2,
        z: 12,
        rotateX: 45,
        scrollTrigger: {
          trigger: ".third",
          start: "top bottom",
          end: "top top",
          scrub: true,
          markers: true,
          immediateRender: false,
          pin: ".third",
        },
        onUpdate,
      });

    // .to(target, {
    //   x: 18,
    //   y: 20,
    //   z: 120,
    //   scrollTrigger: {
    //     trigger: ".third",
    //     start: "top bottom",
    //     end: "top top",
    //     scrub: true,
    //     markers: true,
    //     immediateRender: false,
    //   },
    // });
  }

  setupScrollanimation();

  // WEBGI UPDATE
  let needsUpdate = true;

  function onUpdate() {
    needsUpdate = true;
    viewer.renderer.resetShadows();
    viewer.setDirty();
  }

  viewer.addEventListener("preFrame", () => {
    if (needsUpdate) {
      camera.positionUpdated(true);
      camera.targetUpdated(true);
      needsUpdate = false;
    }
  });

  // KNOW MORE EVENT
  document.querySelector(".button--hero")?.addEventListener("click", () => {
    const element = document.querySelector(".second");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  });

  // SCROLL TO TOP
  document.querySelectorAll(".button--footer")?.forEach((item) => {
    item.addEventListener("click", () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  });
}

setupViewer();
