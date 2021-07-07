import React from "react";
import {
  SidebarContainer,
  Icon, CloseIcon,
  SidebarWrapper,
  SidebarRoute,
  SidebarButtonWrap,
  SidebarLink,
  SidebarMenu
} from "./sidebar-elements";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
          <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
        </SidebarMenu>
        <SidebarButtonWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SidebarButtonWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar