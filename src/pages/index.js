import React, {useState} from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import HeroSection from "../components/hero-section";
import InfoSection from "../components/info-section";
import {
  MainDescription,
  MusicDescription,
  LevelDescription,
  GamesDescription,
  MiniDescription
} from "../components/info-section/data";
import Services from "../components/services";
import Footer from "../components/footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <InfoSection {...MainDescription}/>
      <InfoSection {...MusicDescription}/>
      <InfoSection {...LevelDescription}/>
      <InfoSection {...GamesDescription}/>
      <Services />
      <InfoSection {...MiniDescription}/>
      <Footer />
    </>
  );
}

export default Home