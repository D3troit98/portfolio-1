import {
  Section,
  SectionDivider,
  SectionTitle,
} from '@/styles/GlobalComponents';

import React from 'react';
import {
  DiReact,
  DiMongodb,
  DiNodejs,
  DiGit,
  DiAppcelerator,
  DiWindows,
} from 'react-icons/di';

const Technologies = () => (
  <Section nopadding id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <div className="w-full ">
      <p className="text-lg text-gray-300 mb-12 max-w-3xl">
        I have experience working with various technologies in the programming
        world, ranging from web development to system applications.
      </p>

      {/* Technologies Grid */}
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12 mx-auto  w-full">
        <li className="flex flex-col sm:flex-row lg:flex-col p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all">
          <div className="mb-4 sm:mb-0 sm:mr-4 lg:mb-4 lg:mr-0">
            <DiReact className="text-blue-400" size="3rem" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-2">
              Next JS and Nuxt
            </h4>
            <p className="text-gray-300">
              I have experience building web applications using React.js/Next
              and Nuxt both popular JavaScript library for building user
              interfaces.
            </p>
          </div>
        </li>

        <li className="flex flex-col sm:flex-row lg:flex-col p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all">
          <div className="mb-4 sm:mb-0 sm:mr-4 lg:mb-4 lg:mr-0">
            <DiNodejs className="text-green-400" size="3rem" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-2">
              Node.js and Express.js
            </h4>
            <p className="text-gray-300">
              I have experience building server-side applications using Node.js
              and the Express.js framework.
            </p>
          </div>
        </li>

        <li className="flex flex-col sm:flex-row lg:flex-col p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all">
          <div className="mb-4 sm:mb-0 sm:mr-4 lg:mb-4 lg:mr-0">
            <DiMongodb className="text-green-500" size="3rem" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-2">MongoDB</h4>
            <p className="text-gray-300">
              I have experience working with MongoDB, a popular NoSQL database.
            </p>
          </div>
        </li>

        <li className="flex flex-col sm:flex-row lg:flex-col p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all">
          <div className="mb-4 sm:mb-0 sm:mr-4 lg:mb-4 lg:mr-0">
            <DiGit className="text-orange-500" size="3rem" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-2">
              Git and Version Control
            </h4>
            <p className="text-gray-300">
              I have experience using Git and other version control tools to
              manage and collaborate on software projects.
            </p>
          </div>
        </li>

        <li className="flex flex-col sm:flex-row lg:flex-col p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all">
          <div className="mb-4 sm:mb-0 sm:mr-4 lg:mb-4 lg:mr-0">
            <DiAppcelerator className="text-blue-500" size="3rem" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-2">Go</h4>
            <p className="text-gray-300">
              I have experience writing go to build secure, scalable systems and
              applications and ensure their reliability and quality.
            </p>
          </div>
        </li>

        <li className="flex flex-col sm:flex-row lg:flex-col p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all">
          <div className="mb-4 sm:mb-0 sm:mr-4 lg:mb-4 lg:mr-0">
            <DiWindows className="text-blue-300" size="3rem" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-2">C++ and Qt</h4>
            <p className="text-gray-300">
              I have experience writing C++ and Qt applications and also ensure
              their reliability and quality.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </Section>
);

export default Technologies;
