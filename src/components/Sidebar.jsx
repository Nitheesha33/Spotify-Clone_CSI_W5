import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 220px;
  background: #181818;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  min-width: 180px;
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 8px 24px;
  border-radius: 6px;
  &:hover {
    background: #282828;
  }
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/library">Your Library</NavLink>
        {/* Theme toggle will be in Header */}
      </Nav>
    </SidebarContainer>
  );
}

export default Sidebar; 