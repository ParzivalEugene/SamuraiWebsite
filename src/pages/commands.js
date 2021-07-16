import React, {useState} from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import CommandsSection from "../components/commands";
import Footer from "../components/footer";

const CommandsPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <CommandsSection/>
      <Footer />
    </>
  );
};

export default CommandsPage;