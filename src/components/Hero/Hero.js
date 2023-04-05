import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Ebuka Duruaku <br />
        Welcome to My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a full-stack developer based in Lagos, Nigeria. My expertise
        includes working with HTML, CSS, and JavaScript, as well as modern
        libraries and frameworks like React, Next.js, Node.js, and MongoDB. I am
        experienced with RESTful APIs, Git version control, testing, and
        following Agile methodology. My skills include working with Redux,
        Context API, React Hooks, Server-side rendering, GraphQL, and Gatsby. I
        am passionate about creating solutions and building functional
        applications using code.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "https://wa.me/message/IGUCQGTDTLLOG1")
        }
      >
        WhatsApp Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;