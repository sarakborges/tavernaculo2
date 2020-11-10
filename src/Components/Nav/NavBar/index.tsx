// Dependencies
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

// Contexts
import { AppContext } from "Contexts/App";

// Components
import Button from "Components/Forms/Button";
import NavMenu from "Components/Nav/NavMenu";

// Styles
import {
  NavMenuBar,
  NavMenuToggle,
  NavMenuTitle,
  NavMenuSearchToggle,
} from "./style";

// Component NavBar
const NavBar = ({ children }: { children: string }) => {
  // Attributes
  const { state, dispatch } = useContext(AppContext);
  const { isNavMenuVisible } = state;

  // Functions
  const toggleNavMenu = () => {
    dispatch({
      type: "TOGGLE_NAVMENU",
      data: !isNavMenuVisible,
    });
  };

  // DOM
  return (
    <>
      <NavMenuBar>
        <NavMenuToggle>
          <Button onClick={toggleNavMenu} square transparent>
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </Button>
        </NavMenuToggle>

        <NavMenuTitle>{children}</NavMenuTitle>

        <NavMenuSearchToggle>
          <Button square transparent>
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </Button>
        </NavMenuSearchToggle>
      </NavMenuBar>

      <NavMenu />
    </>
  );
};

export default NavBar;
