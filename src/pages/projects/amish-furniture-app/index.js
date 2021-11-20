import React from "react"
import Layout from "../../../components/Layout/Layout"
import {
  ChipContainer,
  ChipContent,
} from "../../../components/ProjectCard/ProjectCard.styles"
const AmishFurniture = () => {
  return (
    <Layout>
      <div>
        <h1>Amish Furniture</h1>
        <ChipContainer>
          <ChipContent>React</ChipContent>
          <ChipContent>Redux</ChipContent>
          <ChipContent>React-Router</ChipContent>
          <ChipContent>Redux-Thunk</ChipContent>
          <ChipContent>Styled-Components</ChipContent>
          <ChipContent>Material-UI</ChipContent>
          <ChipContent>Reselct</ChipContent>
          <ChipContent>Redux-Persist</ChipContent>
        </ChipContainer>
      </div>
    </Layout>
  )
}

export default AmishFurniture
