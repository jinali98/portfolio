import styled from "styled-components"

export const FooterSection = styled.footer`
  width: 100%;
  height: 8vh;
  background-color: white;

  @media screen and (max-width: 992px) {
    height: 8vh;
  }
`

export const Content = styled.p`
  width: 50%;
  margin: 1rem auto 0;
  text-align: center;
  padding: 15px 0;

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`
