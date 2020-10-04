import React from "react";
import CTA from "../styled/CTA";
import { StyledTitle } from "../styled/random";

const Home = () => {
  return (
    <div>
      <StyledTitle>Ready to Type?</StyledTitle>
      <CTA to="/game">Click or type to start playing!</CTA>
    </div>
  );
};

export default Home;
