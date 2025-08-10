import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { gsap } from "gsap";

function BeeModel() {
  useEffect(() => {
    // Camera setup
    const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 13;

    // Scene setup
    const scene = new THREE.Scene();
    let bee;
    let mixer;

    // Loader
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

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const container = document.getElementById("container3D");
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(500, 500, 500);
    scene.add(topLight);

    // Animation loop
    const reRender3D = () => {
      requestAnimationFrame(reRender3D);
      renderer.render(scene, camera);
      if (mixer) mixer.update(0.02);
    };
    reRender3D();

    // Model positions per section
    let arrPositionModel = [
      { id: "hero", position: { x: -0.5, y: -0.3, z: 0 }, rotation: { x: 0, y: 1.5, z: 0 } },
      { id: "about-us", position: { x: 1, y: -1, z: -5 }, rotation: { x: 0.5, y: -0.5, z: 0 } },
      { id: "products", position: { x: -1, y: -1, z: -5 }, rotation: { x: 0, y: 0.5, z: 0 } },
      { id: "shop", position: { x: 0.8, y: -1, z: 0 }, rotation: { x: 0.3, y: -0.5, z: 0 } },
      { id: "gallery", position: { x: -0.5, y: -0.3, z: 0 }, rotation: { x: 0, y: 1.5, z: 0 } },
      { id: "beauty", position: { x: 0.8, y: -1, z: 0 }, rotation: { x: 0.3, y: -0.5, z: 0 } },
      { id: "meet-us", position: { x: 1, y: -0.7, z: 0 }, rotation: { x: 0.3, y: 1.3, z: 0 } },
    ];

    // Move model based on scroll
    const modelMove = () => {
      const sections = document.querySelectorAll(".section");
      let currentSection;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3) {
          currentSection = section.id;
        }
      });

      let position_active = arrPositionModel.findIndex((val) => val.id === currentSection);
      if (position_active >= 0) {
        let new_coordinates = arrPositionModel[position_active];
        gsap.to(bee.position, { ...new_coordinates.position, duration: 3, ease: "power1.out" });
        gsap.to(bee.rotation, { ...new_coordinates.rotation, duration: 3, ease: "power1.out" });
      }
    };

    window.addEventListener("scroll", () => {
      if (bee) modelMove();
    });

    window.addEventListener("resize", () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });

    // Cleanup on unmount
    return () => {
      container.removeChild(renderer.domElement);
      window.removeEventListener("scroll", modelMove);
    };
  }, []);

  return <div id="container3D" style={{ top: 0, left: 0, }} />;
}

export default BeeModel;
