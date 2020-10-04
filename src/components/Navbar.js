import React from "react";
import { Link } from "react-router-dom";
import {
  StyledNavBar,
  StyledNavBrand,
  StyledNavItems,
  StyledLinkButton,
} from "../styled/StyledNavbar";
import { Accent } from "../styled/random";

const Navbar = () => {
  return (
    <StyledNavBar>
      <StyledNavBrand>
        <Link to="/">
          C<Accent>t</Accent>rl
        </Link>
      </StyledNavBrand>
      <StyledNavItems>
        <li>
          <StyledLinkButton to="/home">Home</StyledLinkButton>
        </li>
        <li>
          <StyledLinkButton to="/game">Game</StyledLinkButton>
        </li>
        <li>
          <StyledLinkButton to="/highScore">High Scores</StyledLinkButton>
        </li>
      </StyledNavItems>
    </StyledNavBar>
  );
};

export default Navbar;
