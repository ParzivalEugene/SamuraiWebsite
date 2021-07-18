import React from "react";
import {
  SidebarContainer,
  Icon, CloseIcon,
  SidebarWrapper,
  SidebarRoute,
  SidebarButtonWrap,
  SidebarLink,
  SidebarMenu, SidebarLinkSite
} from "./sidebar-elements";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinkSite
            href="//discord.com/oauth2/authorize?client_id=825433682205606000&permissions=2151025856&redirect_uri=https%3A%2F%2Fsamuraibot.xyz%2Fcallback&response_type=code&scope=identify%20email%20guilds%20bot%20applications.commands"
            target="_blank"
          >
            Add to Discord
          </SidebarLinkSite>
          <SidebarLinkSite to="/commands">Commands</SidebarLinkSite>
          <SidebarLinkSite
            href="mailto:contact@samuraibot.xyz"
            target="_blank"
          >Support</SidebarLinkSite>
        </SidebarMenu>
        <SidebarButtonWrap>
          <SidebarRoute to="/login">Login</SidebarRoute>
        </SidebarButtonWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar