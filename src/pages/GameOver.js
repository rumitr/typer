import React, { useCallback, useEffect, useState } from "react";
import { useScore } from "../context/ScoreContxt";
import { StyledTitle } from "../styled/random";
import { StyledLinkButton } from "../styled/StyledNavbar";
import { StyledCharacter } from "../styled/Game";

const GameOver = ({ history }) => {
  const [score] = useScore();
  const [scoreMessage, setScoreMessage] = useState("");

  useEffect(() => {
    const saveHighScore = async () => {
      try {
        const options = {
          method: "POST",
          body: JSON.stringify({ name: "Rumit", score }),
        };
        const res = await fetch("/.netlify/functions/saveHighScore", options);
        const data = await res.json();
        if (data.id)
          setScoreMessage("Congratulations, you have a high score!!");
        else setScoreMessage("Sorry, you do not have  high score");
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    saveHighScore();
  }, [score]);

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
      <StyledCharacter>{scoreMessage}</StyledCharacter>
      <StyledLinkButton to="/">Home</StyledLinkButton>
      <StyledLinkButton to="/game">Play Again</StyledLinkButton>
    </div>
  );
};

export default GameOver;
