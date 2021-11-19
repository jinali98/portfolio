import { Link } from "gatsby"
import styled, { css } from "styled-components"
import {
  BsGithub,
  BsLinkedin,
  BsMedium,
  BsEnvelopeFill,
  BsTwitter,
} from "react-icons/bs"
export const SocialMediaLinks = styled.div`
  width: 30%;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SocialMediaLink = styled(Link)``

export const Github = styled(BsGithub)`
  width: 50px;
  height: 50px;
`
export const Linkedin = styled(BsLinkedin)`
  width: 50px;
  height: 50px;
`
export const Twitter = styled(BsTwitter)`
  width: 50px;
  height: 50px;
`
export const Email = styled(BsEnvelopeFill)`
  width: 50px;
  height: 50px;
`
export const Medium = styled(BsMedium)`
  width: 50px;
  height: 50px;
`
