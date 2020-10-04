import React, { useEffect, useCallback } from "react";
import CTA from "../styled/CTA";
import { StyledTitle, Accent } from "../styled/random";

const Home = ({ history }) => {
  const startGame = useCallback(
    (event) => {
      if (event.key === "s") history.push("/game");
    },
    [history]
  );

  useEffect(() => {
    document.addEventListener("keyup", startGame);
    return () => document.removeEventListener("keyup", startGame);
  }, [startGame]);

  return (
    <div>
      <StyledTitle>Ready to Type?</StyledTitle>
      <CTA to="/game">
        Click or type <Accent>s</Accent> to start playing!
      </CTA>
    </div>
  );
};

export default Home;
