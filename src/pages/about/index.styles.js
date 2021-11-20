import styled from "styled-components"
import { Avatar } from "../index.styles"

export const AboutWrapper = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;

  @media screen and (max-width: 992px) {
    width: 90%;
  }
`

export const AboutImage = styled(Avatar)`
  width: 250px;
  margin: auto;
`
export const AboutIntro = styled.p`
  width: 70%;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  font-weight: 500;

  @media screen and (max-width: 992px) {
    width: 80%;
  }
`
export const AboutSubTitle = styled.h2`
  text-align: left;
  font-size: 30px;
  font-weight: 600;
`
export const SkillsSection = styled.div`
  display: flex;
  justify-content: space-around;

  ul {
    text-align: center;
    width: 70%;
    margin: auto;
  }

  @media screen and (max-width: 992px) {
    width: 80%;
    margin: auto;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
  }
`
