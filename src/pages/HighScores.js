import React, { useState, useEffect } from "react";
import { ScoresList, ScoreLI, StyledTable } from "../styled/HighScores";
import { StyledTitle } from "../styled/random";

export default function HighScores() {
  //display those scores
  const [highScores, setHighScores] = useState([]);

  //use the fetch API to call getHighScores function
  useEffect(() => {
    const loadHighScores = async () => {
      try {
        const res = await fetch("/.netlify/functions/getHighScores");
        const scores = await res.json();
        setHighScores(scores);
      } catch (err) {
        console.error(err);
      }
    };
    loadHighScores();
  }, []);
  return (
    <div>
      <StyledTitle>High Scores</StyledTitle>
      {highScores && (
        <StyledTable>
          <tbody>
            {highScores.map(({ fields: { name, score } }, index) => (
              <tr key={index}>
                <td>{name}</td>
                <td>{score}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      )}
      {!highScores && "Loading!!!"}
    </div>
  );
}
