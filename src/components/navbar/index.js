import {FaBars} from "react-icons/fa"
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinksScroll,
  NavLinksRouter,
  NavButton,
  NavButtonLink
} from "./navbar-elements";
import {useEffect, useState} from "react";
import {IconContext} from "react-icons/lib";
import {animateScroll as scroll} from "react-scroll"


const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav)
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{color: "#fff"}}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>Samurai</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinksScroll
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  >
                  About
                </NavLinksScroll>
              </NavItem>
              <NavItem>
                <NavLinksScroll
                  to="music"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Discover
                </NavLinksScroll>
              </NavItem>
              <NavItem>
                <NavLinksScroll
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Advantages
                </NavLinksScroll>
              </NavItem>
              <NavItem>
                <NavLinksRouter
                  href="//discord.com/oauth2/authorize?client_id=825433682205606000&permissions=2151025856&redirect_uri=https%3A%2F%2Fsamuraibot.xyz%2Fcallback&response_type=code&scope=identify%20email%20guilds%20bot%20applications.commands"
                  target="_blank"
                  aria-label="DiscordAdd"
                >
                  Add to Discord
                </NavLinksRouter>
              </NavItem>
            </NavMenu>
            <NavButton>
              <NavButtonLink to="/signin">Login</NavButtonLink>
            </NavButton>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar