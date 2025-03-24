import React from 'react';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';

const data = [
  { number: 20, text: 'Open Source Projects' },
  { number: 800, text: 'LinkedIn Followers' },
  { number: 30, text: 'GitHub Followers' },
  { number: 20, text: 'GitHub Stars' },
];

const Acomplishments = () => (
  <Section nopadding>
    <div className="flex gap-2 flex-col">
      <SectionTitle main>Personal Accomplishments</SectionTitle>
      <SectionDivider />
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
      {data.map((card, index) => (
        <div
          key={index}
          className="bg-[#212D45] rounded-xl shadow-lg p-6 flex flex-col items-center text-white transition-transform transform hover:scale-105"
        >
          <h5 className="text-5xl font-bold mb-2">{card.number}+</h5>
          <p className="text-lg text-white/75 text-center">{card.text}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default Acomplishments;
