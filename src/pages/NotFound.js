import React, {useState} from 'react';
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {
  HeroBackground,
  HeroButtonWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
} from "../components/hero-section/hero-elements";
import {NavButtonLinkRouter} from "../components/navbar/navbar-elements";
import {animateScroll as scroll} from "react-scroll";

const NotFound = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  };
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroContainer>
        <HeroBackground/>
        <HeroContent>
          <HeroH1>404 - Not Found!</HeroH1>
          <HeroButtonWrapper>
            <NavButtonLinkRouter to="/" onclcik={toggleHome}>Go home</NavButtonLinkRouter>
          </HeroButtonWrapper>
        </HeroContent>
      </HeroContainer>
      <Footer/>
    </>
  )
};

export default NotFound;