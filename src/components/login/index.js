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

const LoginSection = () => {

  return (
    <HeroContainer>
      <HeroBackground/>
      <HeroContent>
        <HeroH1>Oops...</HeroH1>
        <HeroP>Login section is under developing, but you can also add the bot to the server or view its commands.</HeroP>
        <HeroButtonWrapper>
          <NavButtonLinkRouter to="/">Go home</NavButtonLinkRouter>
        </HeroButtonWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default LoginSection;