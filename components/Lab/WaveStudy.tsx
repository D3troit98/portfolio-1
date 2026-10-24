'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useCalmMotion } from '@/components/Portfolio/Motion';

export default function WaveStudy() {
  const [amplitude, setAmplitude] = useState(32);
  const [frequency, setFrequency] = useState(3);
  const [variation, setVariation] = useState(0);
  const svg = useRef<SVGSVGElement>(null);
  const reduced = useCalmMotion();
  const paths = Array.from({ length: 11 }, (_, line) =>
    Array.from({ length: 81 }, (_, i) => {
      const x = i * 7.5;
      const envelope = Math.sin((Math.PI * x) / 600);
      const y =
        170 +
        (line - 5) * 13 +
        Math.sin(
          (x / 600) * Math.PI * frequency * 2 + line * 0.24 + variation * 0.8
        ) *
          amplitude *
          envelope;
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`;
    }).join(' ')
  );
  const download = () => {
    if (!svg.current) return;
    const data = new Blob(
      [new XMLSerializer().serializeToString(svg.current)],
      { type: 'image/svg+xml' }
    );
    const url = URL.createObjectURL(data);
    const link = document.createElement('a');
    link.href = url;
    link.download = `wave-study-${variation + 1}.svg`;
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  return (
    <div className="overflow-hidden rounded-lg border border-[#c9c9bf] bg-[#eeeee5]">
      <div className="flex justify-between border-b border-[#c9c9bf] px-5 py-4 font-mono text-[10px] text-[#62675f]">
        <span>02 / INTERFERENCE STUDY</span>
        <span>Variation {String(variation + 1).padStart(2, '0')}</span>
      </div>
      <div className="preview-grid px-4 py-5 sm:p-7">
        <svg
          ref={svg}
          viewBox="0 0 600 340"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Generative sine-wave line drawing"
          className="min-h-[230px] w-full bg-[#f6f5ef]"
        >
          <title>Interference study</title>
          <rect width="600" height="340" fill="#f6f5ef" />
          {paths.map((d, index) => (
            <motion.path
              key={index}
              d={d}
              animate={{ d }}
              transition={{ duration: reduced ? 0 : 0.45, ease: 'easeOut' }}
              fill="none"
              stroke={index === 5 ? '#a65332' : '#414d42'}
              strokeWidth={index === 5 ? 2 : 1}
              opacity={index === 5 ? 1 : 0.65}
            />
          ))}
        </svg>
      </div>
      <div className="grid gap-5 border-t border-[#c9c9bf] p-5 sm:grid-cols-2 sm:p-6">
        <label className="lab-range-label text-[#62675f]">
          Amplitude <output>{amplitude}</output>
          <input
            aria-label="Wave amplitude"
            type="range"
            min="5"
            max="65"
            value={amplitude}
            onChange={(e) => setAmplitude(Number(e.target.value))}
          />
        </label>
        <label className="lab-range-label text-[#62675f]">
          Frequency <output>{frequency}</output>
          <input
            aria-label="Wave frequency"
            type="range"
            min="1"
            max="7"
            step=".5"
            value={frequency}
            onChange={(e) => setFrequency(Number(e.target.value))}
          />
        </label>
        <div className="flex flex-wrap gap-3 sm:col-span-2">
          <button
            onClick={() => setVariation((v) => v + 1)}
            className="lab-light-button"
          >
            New variation ↻
          </button>
          <button onClick={download} className="lab-light-button">
            Save drawing ↗
          </button>
        </div>
      </div>
    </div>
  );
}
