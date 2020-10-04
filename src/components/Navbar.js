import React from "react";
import { Link } from "react-router-dom";
import {
  StyledNavBar,
  StyledNavBrand,
  StyledNavItems,
  StyledLinkButton,
} from "../styled/StyledNavbar";

const Navbar = () => {
  return (
    <StyledNavBar>
      <StyledNavBrand>
        <Link to="/">Typer</Link>
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
