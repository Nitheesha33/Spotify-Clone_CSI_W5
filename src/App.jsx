import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
// Placeholder imports (to be created)
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Player from "./components/Player";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Library from "./pages/Library";
import Playlist from "./pages/Playlist";
import Album from "./pages/Album";
import NowPlaying from "./pages/NowPlaying";

const darkTheme = {
  background: "#121212",
  color: "#fff",
};
const lightTheme = {
  background: "#fff",
  color: "#121212",
};

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    margin: 0;
    font-family: 'Inter', sans-serif;
    transition: background 0.3s, color 0.3s;
  }
`;

const Layout = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;
const MainContent = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;
const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  background: ${({ theme }) => theme.background};
`;

function App() {
  const [theme, setTheme] = React.useState("dark");
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <Layout>
          <Header toggleTheme={toggleTheme} theme={theme} />
          <MainContent>
            <Sidebar />
            <Content>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/library" element={<Library />} />
                <Route path="/playlist/:id" element={<Playlist />} />
                <Route path="/album/:id" element={<Album />} />
                <Route path="/now-playing" element={<NowPlaying />} />
              </Routes>
            </Content>
          </MainContent>
          <Player />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
