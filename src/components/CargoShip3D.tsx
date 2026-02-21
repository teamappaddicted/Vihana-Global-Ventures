'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CargoShip3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const shipGroupRef = useRef<THREE.Group | null>(null);
  const scrollProgressRef = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f4f8);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 3, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting - Brighter for visibility
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(15, 20, 15);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x00d4ff, 0.8);
    pointLight.position.set(-5, 10, 8);
    scene.add(pointLight);

    // Create Cargo Ship
    const shipGroup = new THREE.Group();
    shipGroupRef.current = shipGroup;

    // Hull - Larger and more visible
    const hullGeometry = new THREE.BoxGeometry(3, 1.5, 5.5);
    const hullMaterial = new THREE.MeshPhongMaterial({ color: 0xff6b35 });
    const hull = new THREE.Mesh(hullGeometry, hullMaterial);
    hull.position.y = -0.2;
    hull.castShadow = true;
    hull.receiveShadow = true;
    shipGroup.add(hull);

    // Superstructure - Larger
    const superGeometry = new THREE.BoxGeometry(2.2, 2, 1.5);
    const superMaterial = new THREE.MeshPhongMaterial({ color: 0x003d82 });
    const superstructure = new THREE.Mesh(superGeometry, superMaterial);
    superstructure.position.set(0, 0.8, -1.2);
    superstructure.castShadow = true;
    superstructure.receiveShadow = true;
    shipGroup.add(superstructure);

    // Cargo Containers - More visible
    const containerMaterial = new THREE.MeshPhongMaterial({ color: 0x00d4ff });
    for (let i = -1; i <= 1; i++) {
      for (let j = 0; j < 3; j++) {
        const containerGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
        const container = new THREE.Mesh(containerGeometry, containerMaterial);
        container.position.set(i * 1.2, 0.5 + j * 1, 0.8 - j * 0.4);
        container.castShadow = true;
        container.receiveShadow = true;
        shipGroup.add(container);
      }
    }

    // Mast - Taller and more prominent
    const mastGeometry = new THREE.CylinderGeometry(0.15, 0.15, 3);
    const mastMaterial = new THREE.MeshPhongMaterial({ color: 0xe0e0e0 });
    const mast = new THREE.Mesh(mastGeometry, mastMaterial);
    mast.position.set(0, 2.5, -1);
    mast.castShadow = true;
    shipGroup.add(mast);

    // Radar on top of mast
    const radarGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    const radarMaterial = new THREE.MeshPhongMaterial({ color: 0xff6b35 });
    const radar = new THREE.Mesh(radarGeometry, radarMaterial);
    radar.position.set(0, 3.2, -1);
    radar.castShadow = true;
    shipGroup.add(radar);

    scene.add(shipGroup);

    // Ocean plane - Light blue water
    const oceanGeometry = new THREE.PlaneGeometry(30, 30);
    const oceanMaterial = new THREE.MeshPhongMaterial({ color: 0x4fc3f7 });
    const ocean = new THREE.Mesh(oceanGeometry, oceanMaterial);
    ocean.rotation.x = -Math.PI / 2;
    ocean.position.y = -1.5;
    ocean.receiveShadow = true;
    scene.add(ocean);

    // Scroll-based animation with ref for persistent value
    const handleScroll = () => {
      const scrolled = window.scrollY;
      scrollProgressRef.current = Math.min(scrolled / 400, 1); // Animate over first 400px
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Ship rotation and wave motion with scroll interaction
      shipGroup.rotation.y += 0.003;
      shipGroup.position.y = Math.sin(Date.now() * 0.0005) * 0.4 - (scrollProgressRef.current * 2.5);
      shipGroup.position.x = Math.cos(Date.now() * 0.0003) * 1.5;
      shipGroup.position.z = scrollProgressRef.current * 4; // Move forward as user scrolls

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const newWidth = containerRef.current?.clientWidth || width;
      const newHeight = containerRef.current?.clientHeight || height;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationId);
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full" />
  );
}
