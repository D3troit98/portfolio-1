import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Ebuka Duruaku <br />
        Welcome to My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm a full-stack developer in Lagos, Nigeria, specializing in HTML, CSS,
        JavaScript, React, and Next.js. I have experience with Node.js, MongoDB,
        RESTful APIs, Git, testing, and Agile methodology. My expertise includes
        state management, React Hooks, and server-side rendering. I'm passionate
        about building functional applications with code.
      </SectionText>
      <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
        <Button
          onClick={() =>
            (window.location = "https://wa.me/message/IGUCQGTDTLLOG1")
          }
        >
          WhatsApp Me
        </Button>
        <Button
          onClick={() => window.open("/documents/Ebuka-Micheal-Duruaku-Resume-20240623.pdf", "_blank")}
          style={{ marginLeft: "10px" }}
        >
          View my CV
        </Button>
      </div>
    </LeftSection>
  </Section>
);

export default Hero;
