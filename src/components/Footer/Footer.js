import React from "react"
import { Content, FooterSection } from "./Footer.styles"

const Footer = () => {
  return (
    <FooterSection>
      <Content>
        Jinali Pabasara &copy; {new Date().getFullYear}. Made with &#128151; and
        <a href="https://www.gatsbyjs.com"> Gatsby</a>
      </Content>
    </FooterSection>
  )
}

export default Footer
