import React, { useEffect, useState, useCallback } from "react";
import { useScore } from "../context/ScoreContxt";
import {
  StyledGame,
  StyledScore,
  StyledTimer,
  StyledCharacter,
} from "../styled/Game";
import { Strong } from "../styled/random";

const Game = ({ history }) => {
  // const MAX_SECONDS = 2;
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

  const [currentCharacter, setCurrentCharacter] = useState("");
  const [score, setScore] = useScore();
  // const [ms, setMs] = useState(0);
  // const [seconds, setSeconds] = useState(MAX_SECONDS);
  const [timer, setTimer] = useState(200);

  useEffect(() => {
    setRandomCharacter();
    setScore(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (timer === 0) {
      history.push("/gameOver");
    }
  });

  useEffect(() => {
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1);
    return () => clearInterval(interval);
  }, []);
  // useEffect(() => {
  //   const currentTime = new Date();
  //   const interval = setInterval(() => updateTime(currentTime), 1);
  //   return () => clearInterval(interval);
  // }, []);

  // const updateTime = (startTime) => {
  //   const endDate = new Date();
  //   const msPassedStr = (endDate.getTime() - startTime.getTime()).toString();
  //   const formattedMsPassed = ("0000" + msPassedStr).slice(-5);
  //   const updatedSeconds =
  //     MAX_SECONDS - parseInt(formattedMsPassed.substring(0, 2)) - 1;
  //   const updatedMS =
  //     1000 -
  //     parseInt(formattedMsPassed.substring(formattedMsPassed.length - 3));

  //   setSeconds(addLeadingZeros(updatedSeconds, 2));
  //   setMs(addLeadingZeros(updatedMS, 3));
  // };

  // const addLeadingZeros = (num, length) => {
  //   let zeros = "";
  //   for (let index = 0; index < length; index++) {
  //     zeros += "0";
  //   }

  //   return (zeros + num).slice(-length);
  // };

  // useEffect(() => {
  //   if (seconds <= -1) {
  //     history.push("/gameOver");
  //   }
  // }, [seconds, ms, history]);

  const keyUpHandler = useCallback(
    (event) => {
      if (event.key === currentCharacter) {
        setScore((prev) => prev + 1);
      } else {
        setScore((prev) => prev - 1);
      }
      setRandomCharacter();
      setTimer(200);
    },
    [currentCharacter, setScore]
  );
  const setRandomCharacter = () => {
    const randomInt = Math.floor(Math.random() * characters.length);
    setCurrentCharacter(characters[randomInt]);
  };

  useEffect(() => {
    document.addEventListener("keyup", keyUpHandler);
    return () => {
      document.removeEventListener("keyup", keyUpHandler);
    };
  }, [keyUpHandler]);

  return (
    <StyledGame>
      <StyledScore>
        Score: <Strong>{score}</Strong>
      </StyledScore>
      <StyledCharacter>{currentCharacter}</StyledCharacter>
      <StyledTimer>
        Time:{" "}
        <Strong>
          {/* {seconds}: {ms} */}
          {timer}
        </Strong>
      </StyledTimer>
    </StyledGame>
  );
};

export default Game;
