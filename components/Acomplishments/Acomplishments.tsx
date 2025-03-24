import React from 'react';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';

const data = [
  { number: 30, text: 'Open Source Projects' },
  { number: 1000, text: 'LinkedIn Followers' },
  { number: 11, text: 'GitHub Followers' },
  { number: 7, text: 'GitHub Stars' },
];

const Acomplishments = () => (
  <Section nopadding>
    <SectionDivider />
    <SectionTitle main>Personal Accomplishments</SectionTitle>
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
