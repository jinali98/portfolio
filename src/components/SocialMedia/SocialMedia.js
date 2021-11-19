import React from "react"
import {
  Email,
  Github,
  Linkedin,
  Medium,
  SocialMediaLink,
  SocialMediaLinks,
  Twitter,
} from "./SocialMedia.styles"

const SocialMedia = () => {
  return (
    <SocialMediaLinks>
      <SocialMediaLink to="">
        <Github />
      </SocialMediaLink>
      <SocialMediaLink to="">
        <Linkedin />
      </SocialMediaLink>
      <SocialMediaLink to="">
        <Twitter />
      </SocialMediaLink>
      <SocialMediaLink to="">
        <Email />
      </SocialMediaLink>
      <SocialMediaLink to="">
        <Medium />
      </SocialMediaLink>
    </SocialMediaLinks>
  )
}

export default SocialMedia
