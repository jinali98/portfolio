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
            <ul>
              <li>JavaScript (ES5. ES6+)</li>
              <li>HTML5</li>
              <li>CSS (CSS3)</li>
            </ul>
            <h2>Frameworks / Libraries</h2>
            <ul>
              <li>React.js</li>
              <li>Gatsby.js</li>
              <li>Redux</li>
              <li>Redux-saga</li>
              <li>Reselect</li>
              <li>Material UI</li>
              <li>Styled-Components</li>
              <li>npm</li>
            </ul>
          </div>
          <div>
            <h2>Version Control</h2>
            <ul>
              <li>Git</li>
            </ul>
            <h2>Currently Learning</h2>
            <ul>
              <li>TypeScript</li>
              <li>Python</li>
            </ul>
            <h2>Recent Articles</h2>
            <ul>
              <li>
                <a href="https://medium.com/@jinalipabasara/array-destructuring-in-javascript-b117c31418af">
                  Array Destructuring in JavaScript
                </a>
              </li>
              <li>
                <a href="https://medium.com/@jinalipabasara/usestate-hook-in-react-hooks-42f99a08f8f">
                  useState Hook in React Hooks
                </a>
              </li>
            </ul>
          </div>
        </SkillsSection>
      </AboutWrapper>
    </Layout>
  )
}

export default About
