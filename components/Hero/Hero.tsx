import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";

const Hero = () => (
  <Section row nopadding>
    <div className="w-full sm:w-4/5 md:w-full flex flex-col mx-auto">
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
      <div className="flex items-center gap-6">
        <Button>WhatsApp Me</Button>
        <Button className="ml-2">View my CV</Button>
      </div>
    </div>
  </Section>
);

export default Hero;
