import React from "react";
import styled from "styled-components";
import { FaUserCircle, FaMoon, FaSun } from "react-icons/fa";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background: #181818;
  color: #fff;
`;
const SearchInput = styled.input`
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  outline: none;
  width: 320px;
  font-size: 1rem;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const ThemeButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  font-size: 1.3rem;
  cursor: pointer;
`;

function Header({ toggleTheme, theme }) {
  return (
    <HeaderContainer>
      <SearchInput placeholder="Search for songs, artists, albums..." />
      <Profile>
        <ThemeButton onClick={toggleTheme} title="Toggle theme">
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </ThemeButton>
        <FaUserCircle size={28} />
      </Profile>
    </HeaderContainer>
  );
}

export default Header; 