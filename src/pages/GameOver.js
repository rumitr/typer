import React, { useCallback, useEffect } from "react";
import { useScore } from "../context/ScoreContxt";
import { StyledTitle } from "../styled/random";
import { StyledLinkButton } from "../styled/StyledNavbar";

const GameOver = ({ history }) => {
  const [score] = useScore();
  if (score === undefined) {
    history.push("/");
  }

  const startGame = useCallback(
    (event) => {
      if (event.key === "r") history.push("/game");
    },
    [history]
  );

  useEffect(() => {
    document.addEventListener("keyup", startGame);
    return () => document.removeEventListener("keyup", startGame);
  }, [startGame]);

  return (
    <div>
      <StyledTitle>Game Over</StyledTitle>
      <p>{score}</p>
      <StyledLinkButton to="/">Home</StyledLinkButton>
      <StyledLinkButton to="/game">Play Again</StyledLinkButton>
    </div>
  );
};

export default GameOver;
