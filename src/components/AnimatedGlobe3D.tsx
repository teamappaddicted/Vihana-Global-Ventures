'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function AnimatedGlobe3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f4f8);
    
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 2.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Lighting - Brighter for visibility
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00d4ff, 1.2);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xff6b35, 0.6);
    pointLight2.position.set(-5, -5, -5);
    scene.add(pointLight2);

    // Create Globe with better texture
    const globeGeometry = new THREE.SphereGeometry(1, 128, 128);
    
    // Create canvas for texture with better detail
    const canvas = document.createElement('canvas');
    canvas.width = 4096;
    canvas.height = 2048;
    const ctx = canvas.getContext('2d')!;
    
    // Ocean color - brighter
    ctx.fillStyle = '#4fc3f7';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Land color - vibrant green
    ctx.fillStyle = '#2e7d32';
    const continents = [
      // North America
      { x: 300, y: 400, w: 450, h: 350 },
      // South America
      { x: 600, y: 800, w: 250, h: 400 },
      // Europe
      { x: 1800, y: 300, w: 300, h: 200 },
      // Africa
      { x: 2000, y: 600, w: 350, h: 450 },
      // Asia
      { x: 2500, y: 400, w: 800, h: 500 },
      // Australia
      { x: 3200, y: 1000, w: 250, h: 300 },
    ];
    continents.forEach(cont => {
      ctx.fillRect(cont.x, cont.y, cont.w, cont.h);
    });
    
    // Trade route lines - more visible
    ctx.strokeStyle = '#00d4ff';
    ctx.lineWidth = 4;
    const routes = [
      { x1: 400, y1: 500, x2: 2200, y2: 400 },
      { x1: 2000, y1: 700, x2: 3200, y2: 1000 },
      { x1: 600, y1: 900, x2: 2000, y2: 600 },
      { x1: 2500, y1: 500, x2: 400, y2: 500 },
    ];
    routes.forEach(route => {
      ctx.beginPath();
      ctx.moveTo(route.x1, route.y1);
      ctx.lineTo(route.x2, route.y2);
      ctx.stroke();
    });
    
    // Trade route points - larger and brighter
    ctx.fillStyle = '#ff6b35';
    for (let i = 0; i < 30; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      ctx.beginPath();
      ctx.arc(x, y, 15, 0, Math.PI * 2);
      ctx.fill();
      
      // Add glow effect
      ctx.strokeStyle = '#ffab40';
      ctx.lineWidth = 3;
      ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    const globeMaterial = new THREE.MeshPhongMaterial({ 
      map: texture,
      shininess: 30,
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    // Atmosphere glow - more visible
    const atmosphereGeometry = new THREE.SphereGeometry(1.08, 128, 128);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.2,
      side: THREE.BackSide,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // Rotating lines for trade routes - more visible
    const linesGroup = new THREE.Group();
    for (let i = 0; i < 8; i++) {
      const points = [];
      const radius = 1.01;
      for (let j = 0; j < 150; j++) {
        const theta = (j / 150) * Math.PI * 2 + (i * Math.PI / 4);
        const phi = (Math.sin(j / 150 * Math.PI * 2) + 1) * Math.PI / 2;
        points.push(new THREE.Vector3(
          Math.cos(theta) * Math.sin(phi) * radius,
          Math.cos(phi) * radius,
          Math.sin(theta) * Math.sin(phi) * radius
        ));
      }
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const lineMaterial = new THREE.LineBasicMaterial({ 
        color: 0x00d4ff, 
        transparent: true, 
        opacity: 0.6,
        linewidth: 2,
      });
      const line = new THREE.Line(lineGeometry, lineMaterial);
      linesGroup.add(line);
    }
    scene.add(linesGroup);

    // Orbital rings
    const ringGeometry = new THREE.BufferGeometry();
    const ringPoints = [];
    for (let i = 0; i < 100; i++) {
      const angle = (i / 100) * Math.PI * 2;
      ringPoints.push(
        Math.cos(angle) * 1.3,
        0,
        Math.sin(angle) * 1.3
      );
    }
    ringGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(ringPoints), 3));
    const ringMaterial = new THREE.LineBasicMaterial({ color: 0xff6b35, transparent: true, opacity: 0.3 });
    const ring = new THREE.Line(ringGeometry, ringMaterial);
    scene.add(ring);

    // Animation loop
    let animationId: number;
    let time = 0;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      time += 0.001;
      
      // Faster, smoother rotation
      globe.rotation.y += 0.001;
      globe.rotation.x = Math.sin(time * 0.5) * 0.15;
      
      // Much faster trade route animation
      linesGroup.rotation.z += 0.003;
      linesGroup.rotation.y += 0.0008;
      
      // Faster ring rotation
      ring.rotation.z += 0.002;

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
