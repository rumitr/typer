import React from "react";
import { Link } from "react-router-dom";
import {
  StyledNavBar,
  StyledNavBrand,
  StyledNavItems,
  StyledLinkButton,
  ToggleSwitch,
  CheckBoxLabel,
  CheckBox,
  CheckBoxWrapper,
} from "../styled/StyledNavbar";
import { Accent } from "../styled/random";
import useTheme from "../hooks/useTheme";

const Navbar = ({ toggleTheme }) => {
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
          <StyledLinkButton to="/game">
            <Accent>Game</Accent>
          </StyledLinkButton>
        </li>
        <li>
          <StyledLinkButton to="/highScore">High Scores</StyledLinkButton>
        </li>
        <CheckBoxWrapper>
          <CheckBox id="checkbox" type="checkbox" onClick={toggleTheme} />
          <CheckBoxLabel htmlFor="checkbox" />
        </CheckBoxWrapper>
      </StyledNavItems>
    </StyledNavBar>
  );
};

export default Navbar;
