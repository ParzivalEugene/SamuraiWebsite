import React from "react";
import {
  HeroBackground,
  HeroButtonWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP
} from "../hero-section/hero-elements";
import {NavButtonLinkRouter} from "../navbar/navbar-elements";
import {animateScroll as scroll} from "react-scroll";

const LoginSection = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <HeroContainer>
      <HeroBackground/>
      <HeroContent>
        <HeroH1>Oops...</HeroH1>
        <HeroP>Login section is under developing, but you can also add the bot to the server or view its commands.</HeroP>
        <HeroButtonWrapper>
          <NavButtonLinkRouter to="/" onclcik={toggleHome}>Go home</NavButtonLinkRouter>
        </HeroButtonWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default LoginSection;