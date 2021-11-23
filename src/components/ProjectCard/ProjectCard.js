import { Link } from "gatsby"
import React from "react"
import {
  Card,
  CardTitle,
  ChipContainer,
  ChipContent,
  Image,
} from "./ProjectCard.styles"
const ProjectCard = props => {
  console.log(props)
  return (
    <Card>
      <CardTitle>MyMeal - Calorie Tracker App</CardTitle>
      <Image src="" alt="" />
      <ChipContainer>
        <ChipContent>React</ChipContent>
        <ChipContent>Redux</ChipContent>
        <ChipContent>Reselct</ChipContent>
        <ChipContent>Material-UI</ChipContent>
        <ChipContent>React-Router</ChipContent>
        <ChipContent>Redux-Persist</ChipContent>
        <ChipContent>Redux-Thunk</ChipContent>
        <ChipContent>Styled-Components</ChipContent>
      </ChipContainer>
      <p>
        MyMeal is a web app where users can store their daily calorie intake,
        find healthy recipes, collect favourite recipes, and learn about the
        calorie content of various food items.
      </p>
      <Link to="/projects/amish-furniture-app">
        <button>View</button>
      </Link>
    </Card>
  )
}

export default ProjectCard
