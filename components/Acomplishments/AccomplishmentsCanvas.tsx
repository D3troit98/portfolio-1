'use client';

import { useEffect, useRef } from 'react';

// Decorative only: metrics remain normal, selectable HTML above the canvas.
const AccomplishmentsCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = false;
    let dots: {
      x: number;
      y: number;
      size: number;
      opacity: number;
      glitchOffset: { x: number; y: number };
      glitchTimer: number;
    }[] = [];

    // The reference uses a 2x canvas. Geometry is halved here because the
    // backing resolution is handled separately by devicePixelRatio.
    const paint = (animateDots: boolean) => {
      context.clearRect(0, 0, width, height);
      for (const dot of dots) {
        if (animateDots) {
          dot.glitchTimer += 1;
          if (Math.random() < 0.0005) {
            dot.glitchOffset.x = (Math.random() - 0.5) * 10;
            dot.glitchOffset.y = (Math.random() - 0.5) * 10;
            dot.opacity = Math.random() * 0.9 + 0.1;
          } else if (dot.glitchTimer > 120) {
            dot.glitchOffset.x *= 0.9;
            dot.glitchOffset.y *= 0.9;
            if (Math.abs(dot.glitchOffset.x) < 0.05) dot.glitchOffset.x = 0;
            if (Math.abs(dot.glitchOffset.y) < 0.05) dot.glitchOffset.y = 0;
            dot.glitchTimer = 0;
          }
          dot.opacity += (Math.random() - 0.5) * 0.02;
          dot.opacity = Math.max(0.1, Math.min(0.9, dot.opacity));
        }

        context.fillStyle = `rgba(255, 255, 255, ${dot.opacity})`;
        context.beginPath();
        context.roundRect(
          dot.x + dot.glitchOffset.x - dot.size * 0.5,
          dot.y + dot.glitchOffset.y - dot.size * 0.5,
          dot.size * 2, dot.size * 2, 0.5,
        );
        context.fill();

        if (animateDots && Math.random() < 0.0003) {
          context.fillStyle = `rgba(255, 255, 255, ${dot.opacity * 0.3})`;
          const ghostX = dot.x + (Math.random() - 0.5) * 15 - dot.size * 0.125;
          const ghostY = dot.y + (Math.random() - 0.5) * 15 - dot.size * 0.125;
          const ghostSize = dot.size * 0.25;
          context.beginPath();
          context.roundRect(ghostX, ghostY, ghostSize, ghostSize, 0.25);
          context.fill();
        }
      }
    };

    const animate = () => {
      paint(true);
      frame = requestAnimationFrame(animate);
    };

    const syncAnimation = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      if (visible && !document.hidden && !motionPreference.matches) {
        frame = requestAnimationFrame(animate);
      } else {
        paint(false);
      }
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      dots = [];
      const spacing = 20;
      for (let x = 12; x < width; x += spacing) {
        for (let y = 12; y < height; y += spacing) {
          dots.push({
            x: x + (Math.random() - 0.5) * 4,
            y: y + (Math.random() - 0.5) * 4,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.8 + 0.2,
            glitchOffset: { x: 0, y: 0 },
            glitchTimer: Math.random() * 100,
          });
        }
      }
      paint(false);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncAnimation();
    });
    visibilityObserver.observe(canvas);
    motionPreference.addEventListener('change', syncAnimation);
    document.addEventListener('visibilitychange', syncAnimation);
    resize();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      motionPreference.removeEventListener('change', syncAnimation);
      document.removeEventListener('visibilitychange', syncAnimation);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-30" style={{ maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 72%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 72%)' }} />;
};

export default AccomplishmentsCanvas;
