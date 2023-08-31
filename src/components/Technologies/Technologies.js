import React from 'react';
import {
  DiReact,
  DiMongodb,
  DiNodejs,
  DiGit,
  DiAppcelerator,
  DiWindows,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have experience working with various technologies in the programming
      world, ranging from web development to system applications.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Next JS and Nuxt</ListTitle>
          <ListParagraph>
            I have experience building web applications using React.js/Next and
            Nuxt both popular JavaScript library for building user interfaces.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size="3rem" />
        <ListContainer>
          <ListTitle>Node.js and Express.js</ListTitle>
          <ListParagraph>
            I have experience building server-side applications using Node.js
            and the Express.js framework.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMongodb size="3rem" />
        <ListContainer>
          <ListTitle>MongoDB</ListTitle>
          <ListParagraph>
            I have experience working with MongoDB, a popular NoSQL database.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGit size="3rem" />
        <ListContainer>
          <ListTitle>Git and Version Control</ListTitle>
          <ListParagraph>
            I have experience using Git and other version control tools to
            manage and collaborate on software projects.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAppcelerator size="3rem" />
        <ListContainer>
          <ListTitle>Go</ListTitle>
          <ListParagraph>
            I have experience writing go to build secure, scalable systems and
            applications and ensure their reliability and quality.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiWindows size="3rem" />
        <ListContainer>
          <ListTitle>C++ and Qt </ListTitle>
          <ListParagraph>
            I have experience writing C++ and Qt applications and also ensure
            their reliability and quality.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;