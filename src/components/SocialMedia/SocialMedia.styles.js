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
  width: 60%;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SocialMediaLink = styled(Link)``

export const Github = styled(BsGithub)`
  width: 80px;
  height: 80px;
`
export const Linkedin = styled(BsLinkedin)`
  width: 80px;
  height: 80px;
`
export const Twitter = styled(BsTwitter)`
  width: 80px;
  height: 80px;
`
export const Email = styled(BsEnvelopeFill)`
  width: 80px;
  height: 80px;
`
export const Medium = styled(BsMedium)`
  width: 80px;
  height: 80px;
`
