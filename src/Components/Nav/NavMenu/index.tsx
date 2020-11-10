// Dependencies
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// Contexts
import { AppContext } from "Contexts/App";

// Components
import UserHeader from "Components/Layout/UserHeader";
import Button from "Components/Forms/Button";

// Styles
import { NavMenuWrapper, NavMenuHeader, NavMenuClose } from "./style";

// Component NavBar
const NavBar = () => {
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
    <NavMenuWrapper isVisible={isNavMenuVisible}>
      <NavMenuHeader>
        <UserHeader />

        <NavMenuClose>
          <Button onClick={toggleNavMenu} square transparent>
            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
          </Button>
        </NavMenuClose>
      </NavMenuHeader>
    </NavMenuWrapper>
  );
};

export default NavBar;
