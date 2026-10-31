'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';
import { useCalmMotion } from '../Motion';
import type { BufferGeometry, NormalBufferAttributes } from 'three';

/** A single depth-buffered scene avoids the intersecting CSS planes of the first realm. */
export default function RealmCanvas({ progress }: { progress: RefObject<number> }) {
  const host = useRef<HTMLDivElement>(null);
  const calm = useCalmMotion();
  const calmRef = useRef(calm);
  const [status, setStatus] = useState<'loading' | 'ready' | 'fallback'>('loading');
  useEffect(() => { calmRef.current = calm; }, [calm]);

  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};
    import('three').then(THREE => {
      if (disposed || !host.current) return;
      const container = host.current;
      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
      } catch {
        setStatus('fallback');
        return;
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.35;
      container.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2('#10252d', .017);
      const camera = new THREE.PerspectiveCamera(48, 1, .1, 260);
      scene.add(new THREE.HemisphereLight('#bedce4', '#15252c', 2.3));
      const sun = new THREE.DirectionalLight('#f0dfb5', 3.8);
      sun.position.set(-22, 38, -30);
      scene.add(sun);
      const edge = new THREE.DirectionalLight('#72b6c7', 2.6);
      edge.position.set(24, 12, 15);
      scene.add(edge);
      const stone = new THREE.MeshStandardMaterial({ color: '#46616a', roughness: .93, flatShading: true });
      const darkStone = new THREE.MeshStandardMaterial({ color: '#243f4c', roughness: .9, flatShading: true });
      const paleStone = new THREE.MeshStandardMaterial({ color: '#a4ada0', roughness: .65, metalness: .15, flatShading: true });
      const gold = new THREE.MeshStandardMaterial({ color: '#b9a778', roughness: .42, metalness: .7 });
      const light = new THREE.MeshBasicMaterial({ color: '#afdce0', transparent: true, opacity: .8 });
      const crystalMat = new THREE.MeshStandardMaterial({ color: '#9fd7da', emissive: '#407e8b', emissiveIntensity: .65, metalness: .45, roughness: .16, flatShading: true });
      const mesh = (geometry: BufferGeometry<NormalBufferAttributes>, material: InstanceType<typeof THREE.Material>, x: number, y: number, z: number, parent: InstanceType<typeof THREE.Object3D> = scene) => {
        const object = new THREE.Mesh(geometry, material);
        object.position.set(x, y, z);
        parent.add(object);
        return object;
      };
      // Seeded placement is stable across mounts, screenshots, and motion preferences.
      let seed = 73;
      const random = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
      const plateau = new THREE.CylinderGeometry(1, .79, 1, 7, 1);
      for (let row = 0; row < 19; row++) {
        for (let col = -4; col <= 4; col++) {
          if (Math.abs(col) < 1) continue;
          const x = col * 8.7 + (random() - .5) * 2.8;
          const z = 27 - row * 10;
          const height = 12 + random() * 12;
          const mesa = mesh(plateau, random() > .4 ? stone : darkStone, x, -height / 2 - 3 + random() * 3, z);
          mesa.scale.set(4 + random(), height, 4.5 + random());
          mesa.rotation.y = random() * .8;
          // Fine exposed strata are separate stable rings, never coplanar overlays.
          const strata = mesh(new THREE.CylinderGeometry(4.03, 4, .08, 7), paleStone, x, mesa.position.y + height / 2 - .22, z);
          strata.rotation.y = mesa.rotation.y;
        }
      }
      const floor = mesh(new THREE.PlaneGeometry(400, 400), new THREE.MeshStandardMaterial({ color: '#102a35', roughness: .5, metalness: .35 }), 0, -17, -65);
      floor.rotation.x = -Math.PI / 2;
      const gateway = new THREE.Group();
      gateway.position.set(6, 1, 1);
      gateway.rotation.y = -.18;
      scene.add(gateway);
      mesh(new THREE.BoxGeometry(.6, 6.8, .8), paleStone, -2.6, 2.6, 0, gateway);
      mesh(new THREE.BoxGeometry(.6, 6.8, .8), paleStone, 2.6, 2.6, 0, gateway);
      const arch = mesh(new THREE.TorusGeometry(2.6, .31, 6, 40, Math.PI), paleStone, 0, 6, 0, gateway);
      arch.rotation.z = 0;
      mesh(new THREE.BoxGeometry(6.2, .4, 2.4), gold, 0, -.8, 0, gateway);
      const archLight = mesh(new THREE.TorusGeometry(2.15, .035, 6, 48, Math.PI), light, 0, 6, .05, gateway);
      archLight.rotation.z = 0;
      for (let i = 0; i < 7; i++) {
        for (const side of [-1, 1]) {
          const rune = mesh(new THREE.TorusGeometry(.065, .012, 4, 4), gold, side * 2.6, .4 + i * .75, .415, gateway);
          rune.rotation.z = Math.PI / 4;
        }
      }
      // Wind traces curl through the gateway without transparent intersecting surfaces.
      for (let i = 0; i < 3; i++) {
        const curve = new THREE.CatmullRomCurve3([
          new THREE.Vector3(-13, 1 + i * .4, 6), new THREE.Vector3(-4, 2 + i * .5, 3),
          new THREE.Vector3(6, 3 + i * .3, 0), new THREE.Vector3(15, 5 + i * .4, -10),
          new THREE.Vector3(10, 8 + i * .5, -25),
        ]);
        mesh(new THREE.TubeGeometry(curve, 64, .012, 3, false), new THREE.MeshBasicMaterial({ color: '#a8d2d5', transparent: true, opacity: .28 }), 0, 0, 0);
      }
      // The archive: a terraced tower emerging from the chasms.
      const tower = new THREE.Group();
      tower.position.set(9, -2, -34);
      scene.add(tower);
      for (let i = 0; i < 8; i++) {
        const radius = 6.1 - i * .53;
        mesh(new THREE.CylinderGeometry(radius - .3, radius, 1.25, 10), i % 2 ? darkStone : stone, 0, i * 1.25, 0, tower);
        mesh(new THREE.CylinderGeometry(radius + .1, radius + .1, .12, 10), gold, 0, i * 1.25 + .61, 0, tower);
      }
      for (let i = 0; i < 5; i++) mesh(new THREE.BoxGeometry(.15, 2.1, .1), light, Math.sin(i * 1.25) * 2, 9, Math.cos(i * 1.25) * 2, tower);
      const heart = mesh(new THREE.OctahedronGeometry(1.5), crystalMat, 0, 12.8, 0, tower);
      heart.scale.y = 1.8;
      // The celestial workshop: interlocking brass orbits with a suspended gemstone.
      const orrery = new THREE.Group();
      orrery.position.set(-6, 6, -70);
      scene.add(orrery);
      for (let i = 0; i < 4; i++) {
        const ring = mesh(new THREE.TorusGeometry(3.4 + i * .6, .035, 6, 100), gold, 0, 0, 0, orrery);
        ring.rotation.set(i * .65, i * .8, i * .45);
      }
      const heart2 = mesh(new THREE.OctahedronGeometry(1.7), crystalMat, 0, 0, 0, orrery);
      heart2.scale.y = 1.5;
      const orbitNodes: InstanceType<typeof THREE.Mesh>[] = [];
      for (let i = 0; i < 12; i++) {
        const a = i * Math.PI / 6;
        orbitNodes.push(mesh(new THREE.IcosahedronGeometry(.12), light, Math.cos(a) * 4.7, Math.sin(a) * 4.7, Math.sin(a * 2) * 2, orrery));
      }
      // Story / oathstones, then a final beacon on a far platform.
      for (let i = 0; i < 7; i++) {
        const monolith = mesh(new THREE.BoxGeometry(.9, 4 + i * .6, .9), i % 2 ? stone : paleStone, 5 + Math.sin(i) * 3, i * .3, -93 - i * 2);
        monolith.rotation.z = (i - 3) * .04;
      }
      const beacon = new THREE.Group();
      beacon.position.set(0, 0, -127);
      scene.add(beacon);
      mesh(new THREE.CylinderGeometry(7, 6, 2, 12), stone, 0, -2, 0, beacon);
      mesh(new THREE.CylinderGeometry(3.5, 4.5, .5, 12), gold, 0, -.7, 0, beacon);
      const beaconGem = mesh(new THREE.OctahedronGeometry(2), crystalMat, 0, 3, 0, beacon);
      beaconGem.scale.y = 2;
      const ray = mesh(new THREE.CylinderGeometry(.035, .035, 70, 6), light, 0, 36, 0, beacon);
      ray.material = new THREE.MeshBasicMaterial({ color: '#c5e5de', transparent: true, opacity: .35 });
      const moon = mesh(new THREE.SphereGeometry(4, 24, 16), new THREE.MeshBasicMaterial({ color: '#c6d4bd' }), -25, 35, -120);
      moon.scale.setScalar(1.5);
      mesh(new THREE.SphereGeometry(1.3, 16, 12), new THREE.MeshBasicMaterial({ color: '#789ca9' }), -12, 31, -119);
      const particles = new Float32Array(240 * 3);
      for (let i = 0; i < particles.length; i += 3) { particles[i] = (random() - .5) * 100; particles[i + 1] = random() * 45 - 4; particles[i + 2] = 30 - random() * 200; }
      const pointsGeometry = new THREE.BufferGeometry();
      pointsGeometry.setAttribute('position', new THREE.BufferAttribute(particles, 3));
      const points = new THREE.Points(pointsGeometry, new THREE.PointsMaterial({ color: '#bedfd9', size: .065, transparent: true, opacity: .75, sizeAttenuation: true }));
      scene.add(points);
      const floating: { object: InstanceType<typeof THREE.Mesh>; y: number; phase: number }[] = [];
      for (let i = 0; i < 22; i++) {
        const object = mesh(new THREE.OctahedronGeometry(.3 + random() * .5), crystalMat, (random() - .5) * 22, 2 + random() * 9, 12 - random() * 150);
        object.scale.set(.6, 2.5, .7);
        object.rotation.z = random() * .7;
        floating.push({ object, y: object.position.y, phase: random() * 6 });
      }
      const resize = () => {
        camera.aspect = container.clientWidth / Math.max(container.clientHeight, 1);
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight, false);
      };
      const observer = new ResizeObserver(resize);
      observer.observe(container);
      resize();
      const pointer = new THREE.Vector2();
      const onPointer = (event: PointerEvent) => {
        if (event.pointerType !== 'mouse') return;
        pointer.set((event.clientX / window.innerWidth - .5) * 2, (event.clientY / window.innerHeight - .5) * 2);
      };
      window.addEventListener('pointermove', onPointer, { passive: true });
      let frame = 0;
      let last = 0;
      let smoothed = progress.current;
      let previousProgress = -1;
      const positions = [new THREE.Vector3(-3, 8, 24), new THREE.Vector3(-5, 8, -13), new THREE.Vector3(7, 9, -52), new THREE.Vector3(-8, 7, -83), new THREE.Vector3(9, 8, -109)];
      const targets = [new THREE.Vector3(3, 3, 0), new THREE.Vector3(8, 5, -34), new THREE.Vector3(-5, 6, -70), new THREE.Vector3(6, 3, -99), new THREE.Vector3(0, 3, -127)];
      const targetPosition = new THREE.Vector3();
      const targetLook = new THREE.Vector3();
      const draw = (now: number) => {
        frame = requestAnimationFrame(draw);
        if (document.hidden) { last = now; return; }
        const delta = Math.min((now - last) / 1000 || .016, .05);
        last = now;
        const reduced = calmRef.current;
        smoothed = reduced ? Math.round(progress.current * 4) / 4 : THREE.MathUtils.damp(smoothed, progress.current, 5, delta);
        if (reduced && Math.abs(previousProgress - smoothed) < .0001) return;
        previousProgress = smoothed;
        const p = Math.max(0, Math.min(smoothed * 4, 3.99999));
        const index = Math.floor(p);
        const blend = THREE.MathUtils.smoothstep(p - index, 0, 1);
        targetPosition.lerpVectors(positions[index], positions[index + 1], blend);
        targetLook.lerpVectors(targets[index], targets[index + 1], blend);
        const narrow = camera.aspect < .8;
        camera.position.copy(targetPosition);
        if (narrow) camera.position.z += 7;
        if (!reduced) { camera.position.x += pointer.x * .55; camera.position.y -= pointer.y * .3; }
        camera.lookAt(targetLook);
        const time = reduced ? 0 : now / 1000;
        heart.rotation.y = time * .22;
        heart.position.y = 12.8 + Math.sin(time * .7) * .3;
        heart2.rotation.y = time * .15;
        orrery.rotation.z = Math.sin(time * .07) * .18;
        beaconGem.rotation.y = time * .12;
        floating.forEach(({ object, y, phase }) => { object.position.y = y + Math.sin(time * .6 + phase) * .45; object.rotation.y = time * .12 + phase; });
        points.position.y = Math.sin(time * .1) * .5;
        renderer.render(scene, camera);
      };
      const lost = (event: Event) => { event.preventDefault(); setStatus('fallback'); };
      const restored = () => { previousProgress = -1; setStatus('ready'); };
      renderer.domElement.addEventListener('webglcontextlost', lost);
      renderer.domElement.addEventListener('webglcontextrestored', restored);
      frame = requestAnimationFrame(draw);
      setStatus('ready');
      cleanup = () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        window.removeEventListener('pointermove', onPointer);
        renderer.domElement.removeEventListener('webglcontextlost', lost);
        renderer.domElement.removeEventListener('webglcontextrestored', restored);
        const geometries = new Set<InstanceType<typeof THREE.BufferGeometry>>();
        const materials = new Set<InstanceType<typeof THREE.Material>>();
        scene.traverse(object => {
          if (object instanceof THREE.Mesh || object instanceof THREE.Points) {
            geometries.add(object.geometry);
            (Array.isArray(object.material) ? object.material : [object.material]).forEach(material => materials.add(material));
          }
        });
        geometries.forEach(geometry => geometry.dispose());
        materials.forEach(material => material.dispose());
        renderer.dispose();
        renderer.domElement.remove();
      };
    }).catch(() => { if (!disposed) setStatus('fallback'); });
    return () => { disposed = true; cleanup(); };
  }, [progress]);

  return <div className={`world-canvas world-canvas-${status}`} ref={host} aria-hidden="true"><div className="world-canvas-atmosphere" />{status === 'loading' && <div className="world-loading">Gathering the light<span /></div>}</div>;
}
