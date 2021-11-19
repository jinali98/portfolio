import React from "react"
import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"
import { ContentWrapper, GlobalStyles } from "./Layout.styles"
import "normalize.css"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </>
  )
}

export default Layout
