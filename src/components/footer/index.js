import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLink,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems
} from "./footer-elements";
import {
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  SocialIconLink,
  WebsiteRights
} from "./footer-elements";
import {FaGithub, FaPatreon} from "react-icons/all";
import {FaDiscord} from "react-icons/fa";
import {animateScroll as scroll} from "react-scroll"

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/signin">AAAAAAA</FooterLink>
              <FooterLink to="/signin">BBBBBBB</FooterLink>
              <FooterLink to="/signin">CCCCCCC</FooterLink>
              <FooterLink to="/signin">DDDDDDD</FooterLink>
              <FooterLink to="/signin">EEEEEEE</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Paragraph</FooterLinkTitle>
              <FooterLink to="/signin">AAAAAAA</FooterLink>
              <FooterLink to="/signin">BBBBBBB</FooterLink>
              <FooterLink to="/signin">CCCCCCC</FooterLink>
              <FooterLink to="/signin">DDDDDDD</FooterLink>
              <FooterLink to="/signin">EEEEEEE</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Lorem ipsum</FooterLinkTitle>
              <FooterLink to="/signin">AAAAAAA</FooterLink>
              <FooterLink to="/signin">BBBBBBB</FooterLink>
              <FooterLink to="/signin">CCCCCCC</FooterLink>
              <FooterLink to="/signin">DDDDDDD</FooterLink>
              <FooterLink to="/signin">EEEEEEE</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>BLa bla bla</FooterLinkTitle>
              <FooterLink to="/signin">AAAAAAA</FooterLink>
              <FooterLink to="/signin">BBBBBBB</FooterLink>
              <FooterLink to="/signin">CCCCCCC</FooterLink>
              <FooterLink to="/signin">DDDDDDD</FooterLink>
              <FooterLink to="/signin">EEEEEEE</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>Samurai</SocialLogo>
            <WebsiteRights>© Samurai Bot 2021 - All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="//github.com/ParzivalEugene/Samurai" target="_blank" aria-label="Github">
                <FaGithub/>
              </SocialIconLink>
              <SocialIconLink href="//www.patreon.com/InvincibleWarriors" target="_blank" aria-label="Patreon">
                <FaPatreon/>
              </SocialIconLink>
              <SocialIconLink href="//discord.gg/RNYqdgRT4w" target="_blank" aria-label="Discord">
                <FaDiscord/>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer