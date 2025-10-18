import React from "react";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import InstagramIcon from "../../assets/InstagramIcon.svg";
import { Icon } from "@iconify/react";

const HeaderTop = () => {
  return (
    <div className="section">
      <div className="header__top">
        <div className="header__logo">
          <Link to="/">
            <img src={Logo} alt="London's Bright Beginnings" />
          </Link>
        </div>
        <div className="header__info">
          <span className="header__quote title-text">
            “Our goal is to create an environment a child enjoys and parents
            love”
          </span>
          <span className="header__contact head-text">
            <a href="tel:+14108326977">
            CALL US: +1 (410) 832-6977</a>
          </span>
        </div>
        <div className="header__mobileInfo">
          <div className="address">
            <p>
              <Icon id="head-icons" icon="mdi:map-marker" />
              <a href="">Baltimore, MD 21215</a>
            </p>
          </div>
          <div className="email">
            <p>
              <Icon id="head-icons" icon="mdi:email-outline" />
              <a href="mailto:londonslearningcenterllc@yahoo.com">
                Email Us Now
              </a>
            </p>
          </div>
          <div className="phone">
            <p>
              <Icon id="head-icons" icon="mdi:phone" />
              Call:&nbsp;<a href=<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Three.js + OrbitControls Boilerplate</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    html, body { height: 100%; margin: 0; background: #000; }
    #app { position: fixed; inset: 0; }
    .hint {
      position: fixed; left: 12px; bottom: 12px; color: #9ae6b4;
      font: 12px/1.3 system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
      opacity: .8; user-select: none;
      background: rgba(0,0,0,.4); padding: 8px 10px; border-radius: 8px;
      border: 1px solid rgba(255,255,255,.08);
    }
  </style>
</head>
<body>
  <canvas id="app"></canvas>
  <div class="hint">drag = orbit • wheel = zoom • right-drag = pan</div>

  <script type="module">
    import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';
    import { OrbitControls } from 'https://unpkg.com/three@0.160.0/examples/jsm/controls/OrbitControls.js';

    // ----- Renderer -----
    const canvas = document.getElementById('app');
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;

    // ----- Scene & Camera -----
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
    camera.position.set(0, 1.2, 4);

    // ----- Controls -----
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.target.set(0, 0, 0);

    // ----- Lights -----
    const ambient = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.0);
    keyLight.position.set(3, 5, 4);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x66ffcc, 0.6);
    rimLight.position.set(-4, 3, -2);
    scene.add(rimLight);

    // ----- Helpers (optional) -----
    // const grid = new THREE.GridHelper(10, 20, 0x333333, 0x222222);
    // scene.add(grid);

    // ----- Sphere Mesh -----
    const sphereGeo = new THREE.SphereGeometry(1, 64, 64);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0x1aff64,
      metalness: 0.2,
      roughness: 0.35,
      emissive: 0x003311,
      emissiveIntensity: 0.6
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    scene.add(sphere);

    // Ground (soft shadow feel)
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(30, 30),
      new THREE.MeshStandardMaterial({ color: 0x0a0a0a, roughness: 1 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1.05;
    ground.receiveShadow = true;
    scene.add(ground);

    // ----- Resize handler -----
    function onResize() {
      const w = window.innerWidth, h = window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    window.addEventListener('resize', onResize);

    // ----- Animate loop -----
    const clock = new THREE.Clock();
    function tick() {
      const dt = clock.getDelta();
      sphere.rotation.y += dt * 0.35; // gentle spin
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    }
    tick();
  </script>
</body>
</html>
>(443) 939-0012</a>
            </p>
          </div>
          <div>
            <a href="https://instagram.com/londons_bright_beginnings_llc?igshid=OGQ5ZDc2ODk2ZA==" target="_blank"> 
              <img id="head-social" src={InstagramIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
