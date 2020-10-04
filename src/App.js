import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Game from "./pages/Game";
import HighScores from "./pages/HighScores";
import GameOver from "./pages/GameOver";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Container } from "./styled/Container";
import { Main } from "./styled/Main";
import CreateGlobalStyle from "./styled/Global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styled/Themes";
import useTheme from "./hooks/useTheme";

function App() {
  const [theme, toggleTheme] = useTheme();
  const currentTheme = theme === "light" ? lightTheme : darkTheme;
  return (
    <Router>
      <ThemeProvider theme={currentTheme}>
        <CreateGlobalStyle />
        <Main>
          <Container>
            <Navbar toggleTheme={toggleTheme} />
            <Switch>
              <Route path="/game" component={Game} />
              <Route path="/highScore" component={HighScores} />
              <Route path="/gameOver" component={GameOver} />
              <Route path="/" component={Home} />
            </Switch>
          </Container>
        </Main>
      </ThemeProvider>
    </Router>
  );
}

export default App;
