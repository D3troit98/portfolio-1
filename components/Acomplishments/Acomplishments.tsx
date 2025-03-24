import React from 'react';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';

const data = [
  { number: 30, text: 'Open Source Projects', icon: '💻' },
  { number: 1000, text: 'LinkedIn Followers', icon: '👥' },
  { number: 11, text: 'GitHub Followers', icon: '🐙' },
  { number: 7, text: 'GitHub Stars', icon: '⭐' },
];

const Accomplishments = () => (
  <Section nopadding id="accomplishments">
    <SectionDivider />
    <SectionTitle main>Personal Accomplishments</SectionTitle>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 px-4 sm:px-6 lg:px-8">
      {data.map((card, index) => (
        <div
          key={index}
          className="
            bg-[#212D45]
            rounded-xl
            shadow-lg
            p-4
            sm:p-6
            flex
            flex-col
            items-center
            text-white
            transform
            transition-all
            duration-300
            hover:shadow-xl
            hover:scale-105
            hover:bg-[#2C3E5A]
            group
            overflow-hidden
            relative
          "
          aria-label={`${card.number}+ ${card.text}`}
        >
          <div
            className="
            absolute
            -top-2
            -right-2
            text-4xl
            opacity-10
            group-hover:opacity-20
            transition-opacity
            duration-300
          "
          >
            {card.icon}
          </div>
          <h5
            className="
            text-4xl
            sm:text-5xl
            font-bold
            mb-2
            text-center
            relative
            z-10
          "
          >
            {card.number}+
          </h5>
          <p
            className="
            text-base
            sm:text-lg
            text-white/75
            text-center
            relative
            z-10
          "
          >
            {card.text}
          </p>
        </div>
      ))}
    </div>
  </Section>
);

export default Accomplishments;
