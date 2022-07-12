import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Duruaku Micheal <br/> 
      Welcome to My Personal Portfolio
    </SectionTitle>
    <SectionText>
    I am a highly driven Application Developer based in Lagos, Nigeria passionate about 
programming language, frameworks and tools. I enjoy making things work using code. I'am a junior developer and I have hands-on experience working with TailWindCSS,AntDesign,React,Next.js, TypeScript and C++
    </SectionText>
    <Button onClick={()=> window.location = "https://wa.me/message/IGUCQGTDTLLOG1"}>WhatsApp Me</Button>
  </LeftSection>
 </Section>
);

export default Hero;