import styled from "styled-components";

interface INavMenuWrapper {
  isVisible: boolean;
}
export const NavMenuWrapper = styled.div<INavMenuWrapper>`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;

  width: 100%;
  height: 100%;

  background-color: ${(props) => props.theme.navMenu.bgColor};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};

  transition: visibility 0.3s, opacity 0.3s;
`;

export const NavMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavMenuClose = styled.div`
  width: 50px;

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
