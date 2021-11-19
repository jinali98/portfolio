import React from "react"
import Layout from "../../components/Layout/Layout"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import { Title } from "../index.styles"
import { CardContainer } from "./index.styles"

const ProjectsPage = () => {
  return (
    <Layout>
      <Title>Projects</Title>
      <CardContainer>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </CardContainer>
    </Layout>
  )
}

export default ProjectsPage
