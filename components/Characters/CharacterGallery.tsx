'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useCalmMotion } from '@/components/Portfolio/Motion';
import { characters } from './characters';

type Character = (typeof characters)[number];

function Portrait({
  character,
  index,
}: {
  character: Character;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const label = useId();
  const frame = useRef<HTMLDivElement>(null);
  const reduced = useCalmMotion();
  const { scrollYProgress } = useScroll({
    target: frame,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-16, 16]);
  useEffect(() => {
    if (!open) return;
    const element = dialog.current;
    const previous = document.documentElement.style.overflow;
    element?.showModal();
    document.documentElement.style.overflow = 'hidden';
    return () => {
      element?.close();
      document.documentElement.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <motion.div
        ref={frame}
        className="relative overflow-hidden border border-[#c9c9bf] bg-[#e7e1d4]"
        initial={{ opacity: 1, y: reduced ? 0 : 28 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: reduced ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          onClick={() => setOpen(true)}
          className="character-portrait-button group relative block aspect-[3/4] w-full overflow-hidden text-left"
          aria-label={`View full portrait of ${character.name}`}
        >
          <motion.div
            className="absolute -inset-y-5 inset-x-0"
            style={{ y: reduced ? 0 : y }}
          >
            <Image
              src={character.portrait}
              alt={character.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading={index === 0 ? 'eager' : 'lazy'}
              className="object-cover transition-transform duration-700 group-hover:scale-[1.035] group-focus-visible:scale-[1.035]"
            />
          </motion.div>
          <span
            className="absolute right-4 bottom-4 flex size-11 items-center justify-center rounded-full bg-[#f6f5ef] text-xl text-[#242b26] transition-transform group-hover:rotate-45"
            aria-hidden="true"
          >
            ↗
          </span>
        </button>
        <div className="flex justify-between gap-4 border-t border-[#c9c9bf] bg-[#f0ece2] px-4 py-3 font-mono text-[9px] uppercase tracking-wider text-[#62675f]">
          <span>Study {character.number}</span>
          <span>AI fan portrait</span>
        </div>
      </motion.div>
      <dialog
        ref={dialog}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}
        aria-labelledby={label}
        className="character-dialog"
      >
        <div className="mb-4 flex items-center justify-between gap-6">
          <h2 id={label} className="text-xl tracking-tight">
            {character.name}
          </h2>
          <button
            autoFocus
            onClick={() => setOpen(false)}
            className="lab-light-button"
            aria-label="Close portrait"
          >
            Close ×
          </button>
        </div>
        {open && (
          <Image
            src={character.portrait}
            alt={character.alt}
            width={1000}
            height={1333}
            className="mx-auto h-auto max-h-[72dvh] w-auto max-w-full object-contain"
          />
        )}
        <p className="mt-4 text-center font-mono text-[9px] text-[#62675f]">
          An imagined fan portrait, generated with AI. Not official artwork.
        </p>
      </dialog>
    </>
  );
}

function CharacterChapter({
  character,
  index,
  onEnter,
}: {
  character: Character;
  index: number;
  onEnter: (index: number) => void;
}) {
  const section = useRef<HTMLElement>(null);
  const inView = useInView(section, { margin: '-20% 0px -35% 0px' });
  useEffect(() => {
    if (inView) onEnter(index);
  }, [inView, index, onEnter]);
  return (
    <section
      ref={section}
      id={`character-${character.id}`}
      className="scroll-mt-24 border-t border-[#c9c9bf] py-12 md:py-20"
    >
      <div className="grid items-center gap-8 md:grid-cols-[1.05fr_.95fr] md:gap-16 lg:gap-24">
        <div className={index % 2 === 1 ? 'md:order-2' : ''}>
          <Portrait character={character} index={index} />
        </div>
        <div className={`${index % 2 === 1 ? 'md:order-1' : ''} py-3`}>
          <p className="folio-eyebrow">
            {character.number} / {character.world} / {character.series}
          </p>
          <h2 className="mt-5 text-4xl leading-[1.05] tracking-[-.045em] lg:text-6xl">
            {character.name}
          </h2>
          <p className="mt-5 font-serif text-2xl italic leading-snug text-[#a65332] lg:text-3xl">
            {character.theme}
          </p>
          <p className="mt-6 max-w-md text-sm leading-8 text-[#62675f]">
            {character.introduction}
          </p>
          <p className="mt-6 max-w-md border-l-2 border-[#a65332] pl-5 text-sm leading-7 text-[#62675f]">
            {character.reflection}
          </p>
          <a
            href={character.source}
            target="_blank"
            rel="noopener noreferrer"
            className="folio-text-link mt-7 inline-block text-xs"
          >
            Book background ↗
          </a>
          {index < characters.length - 1 && (
            <a
              href={`#character-${characters[index + 1].id}`}
              className="folio-text-link mt-7 ml-6 inline-block text-xs"
            >
              Next portrait ↓
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default function CharacterGallery() {
  const [active, setActive] = useState(0);
  return (
    <>
      <nav
        aria-label="Character gallery navigation"
        className="sticky top-0 z-20 -mx-5 overflow-x-auto border-y border-[#c9c9bf] bg-[#f6f5ef]/95 px-5 py-3 backdrop-blur-md sm:-mx-10 sm:px-10 lg:-mx-16 lg:px-16"
      >
        <div className="mx-auto flex min-w-[570px] max-w-[1192px] justify-between gap-2">
          {characters.map((character, index) => (
            <a
              key={character.id}
              href={`#character-${character.id}`}
              aria-current={active === index ? 'location' : undefined}
              className={`relative rounded px-3 py-3 text-xs transition-colors ${active === index ? 'bg-[#e5e5da] text-[#a65332]' : 'text-[#62675f] hover:bg-[#eeeee5]'}`}
            >
              <span className="mr-2 font-mono text-[9px]">
                {character.number}
              </span>
              {character.name.split(' ')[0]}
            </a>
          ))}
        </div>
      </nav>
      {characters.map((character, index) => (
        <CharacterChapter
          key={character.id}
          character={character}
          index={index}
          onEnter={setActive}
        />
      ))}
    </>
  );
}
