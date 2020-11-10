// Dependencies
import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Contexts
import { AuthContext } from "Contexts/Auth";

// Styles
import {
  UserHeaderWrapper,
  UserAvatar,
  UserInfo,
  UserName,
  UserActions,
  UserLogout,
} from "./style";

// Component UserHeader
const UserHeader = () => {
  // Attributes
  const { state, dispatch } = useContext(AuthContext);
  const { user } = state;

  // Functions
  const doLogout = () => {
    dispatch({ type: "DO_LOGOUT", data: undefined });
  };

  // DOM
  return (
    <UserHeaderWrapper>
      <UserAvatar src={user?.avatar || ""}>
        {user?.name.substr(0, 1)}
      </UserAvatar>

      <UserInfo>
        <UserName>{user?.name}</UserName>

        <UserActions>
          <Link to={""}>Ver perfil</Link>

          <span />

          <UserLogout onClick={doLogout}>Fazer logout</UserLogout>
        </UserActions>
      </UserInfo>
    </UserHeaderWrapper>
  );
};

export default UserHeader;
