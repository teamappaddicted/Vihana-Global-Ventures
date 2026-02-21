'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function AirplaneAnimation3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null;
    
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Lighting - Enhanced for cargo planes
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff6b35, 0.8);
    pointLight.position.set(8, 8, 8);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x00d4ff, 0.7);
    pointLight2.position.set(-8, -8, -8);
    scene.add(pointLight2);

    // Create airplane function with cargo containers
    const createCargoPlanе = (startX: number, startY: number, startZ: number, color: number, containerColor: number) => {
      const planeGroup = new THREE.Group();

      // Fuselage - Larger for cargo
      const fuselageGeometry = new THREE.CylinderGeometry(0.25, 0.25, 2.2, 16, 8);
      const planeMaterial = new THREE.MeshPhongMaterial({ color });
      const fuselage = new THREE.Mesh(fuselageGeometry, planeMaterial);
      fuselage.rotation.z = Math.PI / 2;
      fuselage.castShadow = true;
      planeGroup.add(fuselage);

      // Cockpit - More prominent
      const cockpitGeometry = new THREE.SphereGeometry(0.28, 16, 16);
      const cockpitMaterial = new THREE.MeshPhongMaterial({ color: 0xff6b35 });
      const cockpit = new THREE.Mesh(cockpitGeometry, cockpitMaterial);
      cockpit.position.x = 0.6;
      cockpit.castShadow = true;
      planeGroup.add(cockpit);

      // Cargo Door indicator
      const doorGeometry = new THREE.BoxGeometry(1.8, 0.15, 0.3);
      const doorMaterial = new THREE.MeshPhongMaterial({ color: 0x1a1a2e });
      const door = new THREE.Mesh(doorGeometry, doorMaterial);
      door.position.z = 0.15;
      door.castShadow = true;
      planeGroup.add(door);

      // Main Wings - Larger
      const wingsGeometry = new THREE.BoxGeometry(3.5, 0.12, 0.4);
      const wings = new THREE.Mesh(wingsGeometry, planeMaterial);
      wings.position.z = 0;
      wings.castShadow = true;
      planeGroup.add(wings);

      // Winglets
      const wingletGeometry = new THREE.BoxGeometry(0.15, 0.4, 0.2);
      const wingletLeft = new THREE.Mesh(wingletGeometry, planeMaterial);
      wingletLeft.position.set(0, 0, -1.8);
      wingletLeft.castShadow = true;
      planeGroup.add(wingletLeft);

      const wingletRight = new THREE.Mesh(wingletGeometry, planeMaterial);
      wingletRight.position.set(0, 0, 1.8);
      wingletRight.castShadow = true;
      planeGroup.add(wingletRight);

      // Tail Wings
      const tailGeometry = new THREE.BoxGeometry(1.2, 0.1, 0.35);
      const tail = new THREE.Mesh(tailGeometry, planeMaterial);
      tail.position.x = -0.7;
      tail.castShadow = true;
      planeGroup.add(tail);

      // Vertical Stabilizer - Taller
      const stabilizerGeometry = new THREE.BoxGeometry(0.12, 0.6, 0.2);
      const stabilizer = new THREE.Mesh(stabilizerGeometry, planeMaterial);
      stabilizer.position.x = -0.7;
      stabilizer.position.z = 0.25;
      stabilizer.castShadow = true;
      planeGroup.add(stabilizer);

      // Cargo Containers - Multiple stacked containers
      const containerPositions = [
        { x: -0.2, y: 0.35, z: -0.4, label: 'EXPORT' },
        { x: 0.1, y: 0.35, z: 0, label: 'CARGO' },
        { x: 0.4, y: 0.35, z: 0.4, label: 'IMPORT' },
        { x: -0.2, y: 0.75, z: -0.4, label: '' },
        { x: 0.1, y: 0.75, z: 0, label: '' },
        { x: 0.4, y: 0.75, z: 0.4, label: '' },
      ];

      containerPositions.forEach((pos) => {
        const containerGeometry = new THREE.BoxGeometry(0.35, 0.35, 0.35);
        const containerMaterial = new THREE.MeshPhongMaterial({ color: containerColor });
        const container = new THREE.Mesh(containerGeometry, containerMaterial);
        container.position.set(pos.x, pos.y, pos.z);
        container.castShadow = true;
        planeGroup.add(container);
      });

      // Landing gear - Heavy duty
      const gearGeometry = new THREE.CylinderGeometry(0.08, 0.08, 0.25, 8);
      const gearMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });

      const gearLeft = new THREE.Mesh(gearGeometry, gearMaterial);
      gearLeft.position.set(-0.1, -0.35, -0.5);
      planeGroup.add(gearLeft);

      const gearCenter = new THREE.Mesh(gearGeometry, gearMaterial);
      gearCenter.position.set(0.1, -0.35, 0);
      planeGroup.add(gearCenter);

      const gearRight = new THREE.Mesh(gearGeometry, gearMaterial);
      gearRight.position.set(-0.1, -0.35, 0.5);
      planeGroup.add(gearRight);

      // Engines - 2 turbofan
      const engineGeometry = new THREE.CylinderGeometry(0.15, 0.15, 0.4, 16);
      const engineMaterial = new THREE.MeshPhongMaterial({ color: 0x444444 });

      const engineLeft = new THREE.Mesh(engineGeometry, engineMaterial);
      engineLeft.position.set(0, 0.2, -1.3);
      engineLeft.rotation.z = Math.PI / 2;
      engineLeft.castShadow = true;
      planeGroup.add(engineLeft);

      const engineRight = new THREE.Mesh(engineGeometry, engineMaterial);
      engineRight.position.set(0, 0.2, 1.3);
      engineRight.rotation.z = Math.PI / 2;
      engineRight.castShadow = true;
      planeGroup.add(engineRight);

      // Engine inlets (glow effect)
      const inletGeometry = new THREE.CylinderGeometry(0.12, 0.12, 0.05, 16);
      const inletMaterial = new THREE.MeshPhongMaterial({ color: 0x00d4ff, emissive: 0x0066cc });
      
      const inletLeft = new THREE.Mesh(inletGeometry, inletMaterial);
      inletLeft.position.set(0.22, 0.2, -1.3);
      inletLeft.rotation.z = Math.PI / 2;
      planeGroup.add(inletLeft);

      const inletRight = new THREE.Mesh(inletGeometry, inletMaterial);
      inletRight.position.set(0.22, 0.2, 1.3);
      inletRight.rotation.z = Math.PI / 2;
      planeGroup.add(inletRight);

      planeGroup.position.set(startX, startY, startZ);
      return planeGroup;
    };

    // Create 3 cargo airplanes with different colors
    const airplane1 = createCargoPlanе(8, 5, -4, 0x003d82, 0x00d4ff); // Navy plane with cyan containers
    const airplane2 = createCargoPlanе(-6, -4, -2.5, 0xff6b35, 0xffeb3b); // Orange plane with yellow containers
    const airplane3 = createCargoPlanе(5, -6, -1, 0x2e7d32, 0xff6b35); // Green plane with orange containers

    scene.add(airplane1);
    scene.add(airplane2);
    scene.add(airplane3);

    // Animation loop
    let animationId: number;
    let time = 0;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      time += 0.01;

      // Airplane 1 - Circular path with dipping, top right
      airplane1.position.x = 8 + Math.sin(time * 0.4) * 4;
      airplane1.position.y = 5 + Math.cos(time * 0.35) * 3.5 - Math.sin(time * 0.2) * 2;
      airplane1.position.z = -4 + Math.sin(time * 0.38) * 2.5;
      airplane1.rotation.z = Math.atan2(Math.cos(time * 0.35) * 3.5, Math.sin(time * 0.4) * 4);
      airplane1.rotation.x = Math.sin(time * 0.2) * 0.4;
      airplane1.rotation.y = Math.sin(time * 0.3) * 0.2;

      // Airplane 2 - Diagonal weaving path, bottom left
      const fig8X = Math.sin(time * 0.45);
      const fig8Y = Math.sin(time * 0.45) * Math.cos(time * 0.35);
      airplane2.position.x = -6 + fig8X * 4;
      airplane2.position.y = -4 + fig8Y * 4;
      airplane2.position.z = -2.5 + Math.cos(time * 0.4) * 2;
      airplane2.rotation.z = Math.atan2(fig8Y * 4, fig8X * 4);
      airplane2.rotation.y = Math.cos(time * 0.3) * 0.5;
      airplane2.rotation.x = Math.sin(time * 0.25) * 0.3;

      // Airplane 3 - Spiral ascending path, top left to bottom right
      airplane3.position.x = 5 - Math.sin(time * 0.55) * 5;
      airplane3.position.y = -6 + Math.cos(time * 0.4) * 4 + time * 0.25;
      airplane3.position.z = -1 + Math.sin(time * 0.45) * 2.5;
      airplane3.rotation.z = -Math.atan2(Math.cos(time * 0.4) * 4, Math.sin(time * 0.55) * 5);
      airplane3.rotation.y = Math.cos(time * 0.35) * 0.6;
      airplane3.rotation.x = Math.sin(time * 0.3) * 0.25;

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
      cancelAnimationFrame(animationId);
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}
