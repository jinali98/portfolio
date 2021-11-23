import React from "react"
import Layout from "../../components/Layout/Layout"
import { Avatar, Title } from "../index.styles"
import {
  AboutImage,
  AboutIntro,
  AboutWrapper,
  SkillsSection,
} from "./index.styles"

const About = () => {
  return (
    <Layout>
      <AboutWrapper>
        <Title>About</Title>
        <AboutImage src="https://i.ibb.co/F8q3M7g/68109485.jpg" alt="" />
        <AboutIntro>
          I'm a passionate Software Engineer who focuses on writing clean and
          efficient code. Feel free to take a look at my projects or most recent
          articles.
        </AboutIntro>
        <SkillsSection>
          <div>
            <h2>Languages</h2>
            <p>JavaScript (ES5. ES6+), HTML5, CSS (CSS3)</p>
          </div>
          <div>
            <h2>Frameworks / Libraries</h2>
            <p>
              React.js,Redux, Redux-saga, Reselect, Material UI,
              Styled-Components, Bootstrap
            </p>
          </div>
          <div>
            <h2>Static Site Generators</h2>
            <p>GatsbyJS</p>
          </div>
          <div>
            <h2>Tools</h2>
            <p>npm, postman</p>
          </div>
          <div>
            <h2>Version Control</h2>
            <p>Git</p>
          </div>
          <div>
            <h2>Currently Learning</h2>
            <p>TypeScript, python</p>
          </div>
          <div>
            <h2>Recent Articles</h2>
            <p>
              <a href="https://medium.com/@jinalipabasara/array-destructuring-in-javascript-b117c31418af">
                Array Destructuring in JavaScript
              </a>
            </p>
            <p>
              <a href="https://medium.com/@jinalipabasara/usestate-hook-in-react-hooks-42f99a08f8f">
                useState Hook in React Hooks
              </a>
            </p>
          </div>
        </SkillsSection>
      </AboutWrapper>
    </Layout>
  )
}

export default About
