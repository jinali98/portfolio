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
  min-height: calc(100vh - (10vh + 8vh));
  margin: 1rem auto;

  @media screen and (max-width: 992px) {
    width: 95vw;
  }
`

// 200, 300, 500, 700
