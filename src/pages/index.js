import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import Layout from "../components/Layout/Layout"
import SocialMedia from "../components/SocialMedia/SocialMedia"
import { Avatar, HomePageWrapper, Introduction, Title } from "./index.styles"
export default function Home() {
  // const imageClass = {
  //   borderRadius: "50%",
  //   border: "10px solid whitesmoke",
  //   outline: "none",
  // }
  // const imageOutterClass = {
  //   width: 300,
  //   height: 300,
  // }

  return (
    <Layout>
      <HomePageWrapper>
        <Title>Hi, I'm Jinali</Title>
        <StaticImage
          src="https://i.ibb.co/F8q3M7g/68109485.jpg"
          alt="avatar"
          width={250}
          height={250}
          placeholder="blurred"
          className="imageOutterClass"
        />
        <Introduction>
          I'm a Software Engineer from Colombo, Sri Lanka.
        </Introduction>
        <SocialMedia />
      </HomePageWrapper>
    </Layout>
  )
}
