import React, {useState} from "react";
import {Button} from "../ButtonElement"
import {
  HeroContainer,
  HeroBackground,
  HeroContent,
  HeroH1,
  HeroP,
  HeroButtonWrapper,
  ArrowForward, ArrowRight
} from "./hero-elements";

const HeroSection = () => {
  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBackground/>
      <HeroContent>
        <HeroH1>Samurai</HeroH1>
        <HeroP>
          Unique discord bot – Samurai. Essential and useful tool on any server.
        </HeroP>
        <HeroButtonWrapper>
          <Button
            to="about"
            smooth={true}
            duration={500}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get started {hover ? <ArrowForward/> : <ArrowRight/>}
          </Button>
        </HeroButtonWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;