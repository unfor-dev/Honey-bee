import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { gsap } from "gsap";

function BeeModel() {
  useEffect(() => {
    const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 13;

    const scene = new THREE.Scene();
    let bee;
    let mixer;

    const loader = new GLTFLoader();
    loader.load("/demon_bee_full_texture.glb", (gltf) => {
      bee = gltf.scene;
      bee.scale.set(0.4, 0.4, 0.4);
      bee.rotation.y = Math.PI / 0.6;
      bee.position.set(1, -0.2, 0);
      scene.add(bee);

      mixer = new THREE.AnimationMixer(bee);
      mixer.clipAction(gltf.animations[0]).play();
      modelMove();
    });

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const container = document.getElementById("container3D");
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(500, 500, 500);
    scene.add(topLight);

    const reRender3D = () => {
      requestAnimationFrame(reRender3D);
      renderer.render(scene, camera);
      if (mixer) mixer.update(0.02);
    };
    reRender3D();

    // Positions for desktop
    const arrPositionModelDesktop = [
      { id: "hero", position: { x: -0.5, y: -0.3, z: 0 }, rotation: { x: 0, y: 1.5, z: 0 }, scale: 0.4 },
      { id: "about-us", position: { x: 1.3, y: -0.4, z: -5 }, rotation: { x: 0.5, y: -0.5, z: 0 }, scale: 0.4 },
      { id: "products", position: { x: -1, y: -1, z: -5 }, rotation: { x: 0, y: 0.5, z: 0 }, scale: 0.4 },
      { id: "shop", position: { x: 0.8, y: -1, z: 0 }, rotation: { x: 0.3, y: -0.5, z: 0 }, scale: 0.4 },
      { id: "gallery", position: { x: -0.5, y: -0.3, z: 0 }, rotation: { x: 0, y: 1.5, z: 0 }, scale: 0.4 },
      { id: "beauty", position: { x: 0.8, y: -1, z: 0 }, rotation: { x: 0.3, y: -0.5, z: 0 }, scale: 0.4 },
      { id: "meet-us", position: { x: 1, y: -0.7, z: 0 }, rotation: { x: 0.3, y: 1.3, z: 0 }, scale: 0.4 },
    ];

    // Positions for mobile
    const arrPositionModelMobile = [
      { id: "hero", position: { x: -0.4, y: -0.1, z: 0 }, rotation: { x: 0, y: 1.5, z: 0 }, scale: 0.25 },
      { id: "about-us", position: { x: 0.5, y: -0.2, z: -5 }, rotation: { x: 0.1, y: 0.3, z: 0 }, scale: 0.25 },
      { id: "products", position: { x: -0.5, y: 0.8, z: -5 }, rotation: { x: 0, y: 0.5, z: 0 }, scale: 0.25 },
      { id: "shop", position: { x: 0.3, y: -1.2, z: 0 }, rotation: { x: 0.3, y: -0.5, z: 0 }, scale: 0.25 },
      { id: "gallery", position: { x: 0, y: -0.5, z: 0 }, rotation: { x: 0, y: 1.5, z: 0 }, scale: 0.25 },
      { id: "beauty", position: { x: 0.3, y: -1.2, z: 0 }, rotation: { x: 0.3, y: -0.5, z: 0 }, scale: 0.25 },
      { id: "meet-us", position: { x: 0.5, y: -1, z: 0 }, rotation: { x: 0.3, y: 1.3, z: 0 }, scale: 0.25 },
    ];

    const modelMove = () => {
      if (!bee) return;

      const sections = document.querySelectorAll(".section");
      let currentSection;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3) {
          currentSection = section.id;
        }
      });

      const arr = window.innerWidth <= 750 ? arrPositionModelMobile : arrPositionModelDesktop;
      let position_active = arr.findIndex((val) => val.id === currentSection);

      if (position_active >= 0) {
        let coords = arr[position_active];
        gsap.to(bee.position, { ...coords.position, duration: 1.5, ease: "power1.out" });
        gsap.to(bee.rotation, { ...coords.rotation, duration: 1.5, ease: "power1.out" });
        gsap.to(bee.scale, { x: coords.scale, y: coords.scale, z: coords.scale, duration: 1.5 });
      }
    };

    window.addEventListener("scroll", modelMove);
    window.addEventListener("resize", () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      modelMove(); // Update model when resizing
    });

    return () => {
      container.removeChild(renderer.domElement);
      window.removeEventListener("scroll", modelMove);
    };
  }, []);

  return <div id="container3D" style={{ top: 0, left: 0 }} />;
}

export default BeeModel;
