import React from "react"

import Layout from "../components/Layout/Layout"
import SocialMedia from "../components/SocialMedia/SocialMedia"
import { Avatar, HomePageWrapper, Introduction, Title } from "./index.styles"
export default function Home() {
  return (
    <Layout>
      <HomePageWrapper>
        <Title>Hi, I'm Jinali</Title>
        <Avatar src="https://i.ibb.co/F8q3M7g/68109485.jpg" alt="" />
        <Introduction>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          aliquam eaque voluptatibus dolorem aperiam autem cumque cupiditate
          eligendi molestias eos!
        </Introduction>
        <SocialMedia />
      </HomePageWrapper>
    </Layout>
  )
}
