import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLink,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkToSite
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
              <FooterLinkTitle>Product</FooterLinkTitle>
              <FooterLinkToSite
                href="//discord.com/oauth2/authorize?client_id=825433682205606000&permissions=2151025856&redirect_uri=https%3A%2F%2Fsamuraibot.xyz%2Fcallback&response_type=code&scope=identify%20email%20guilds%20bot%20applications.commands"
                target="_blank"
              >Add to Discord
              </FooterLinkToSite>
              <FooterLink to="/commands">Commands</FooterLink>
              <FooterLinkToSite
                href="//www.tinkoff.ru/sl/N4WrFLpAiu"
                target="_blank"
              >
                Donation
              </FooterLinkToSite>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Resources</FooterLinkTitle>
              <FooterLinkToSite
                href="//github.com/ParzivalEugene/Samurai"
                target="_blank"
              >
                Project Code
              </FooterLinkToSite>
              <FooterLinkToSite
                href="//github.com/invincible-warriors"
                target="_blank"
              >
                Invincible Warriors Company
              </FooterLinkToSite>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact</FooterLinkTitle>
              <FooterLinkToSite
                href="mailto:contact@samuraibot.xyz"
                target="_blank"
              >
                contact@samuraibot.xyz
              </FooterLinkToSite>
              <FooterLinkToSite
                href="//discord.gg/RNYqdgRT4w"
                target="_blank"
              >
                Samurai Community Discord
              </FooterLinkToSite>
              <FooterLinkToSite
                href="//discord.gg/anjq9YFW59"
                target="_blank"
              >
                Invincible Warriors Discord
              </FooterLinkToSite>
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