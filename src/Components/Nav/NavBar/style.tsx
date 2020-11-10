import styled from "styled-components";

export const NavMenuBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;

  width: 100%;
  height: 50px;

  background-color: ${(props) => props.theme.navMenu.bar.bgColor};

  button {
    font-size: 20px;

    transition: background-color 0.3s;

    &:hover {
      background-color: ${(props) =>
        props.theme.navMenu.bar.button.hover.bgColor};

      color: ${(props) => props.theme.button.fontColor};
    }
  }
`;

export const NavMenuToggle = styled.div`
  width: 50px;
`;

export const NavMenuTitle = styled.div`
  flex: 1;
  overflow: hidden;

  text-align: center;
  text-overflow: ellipsis;
  font-size: 20px;
`;

export const NavMenuSearchToggle = styled.div`
  width: 50px;
`;
