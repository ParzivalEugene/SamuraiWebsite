import React, {useState} from "react";
import Video from "../../videos/network.mp4"
import {Button} from "../ButtonElement"
import {
  HeroContainer,
  HeroBackground,
  VideoBackground,
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
      <HeroBackground>
        <VideoBackground autoPlay loop muted src={Video} type="video/mp4"/>
      </HeroBackground>
      <HeroContent>
        <HeroH1>Samurai</HeroH1>
        <HeroP>
          An incredible discord bot named Samurai. It is simply irreplaceable on any server.
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