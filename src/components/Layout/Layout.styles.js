import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
body{
  line-height: 1.5;
  color: #343a40;
  background-color: #e9ecef;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 300;
  
}

a{
  text-decoration: none;
}

li{
  list-style: none;
}

html{
  scroll-behavior: smooth;
}
`

export const ContentWrapper = styled.section`
  width: 80vw;
  margin: 1rem auto;
`

// 200, 300, 500, 700
