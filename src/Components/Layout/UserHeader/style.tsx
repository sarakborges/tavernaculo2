import styled from "styled-components";

export const UserHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  max-width: 100%;
  padding: 15px;
`;

interface IUserAvatar {
  src: string;
}
export const UserAvatar = styled.div<IUserAvatar>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${(props) => props.theme.userHeader.avatarSize};
  height: ${(props) => props.theme.userHeader.avatarSize};

  border-radius: 100%;
  background-image: url("${(props) => (!!props.src ? props.src : "none")}");
  background-color: ${(props) => props.theme.userHeader.avatarBg};
  background-position: center;
  background-size: cover;

  font-size: ${(props) => (!props.src ? "50px" : 0)};
`;

export const UserInfo = styled.div`
  max-width: calc(100% - ${(props) => props.theme.userHeader.avatarSize});
  padding: 0 15px;
  flex: 1;
`;

export const UserName = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;

  font-size: 24px;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.userHeader.name.fontColor};
`;

export const UserActions = styled.div`
  display: flex;
  align-items: center;

  font-size: 15px;

  > span {
    margin: 0 7px;

    width: 4px;
    height: 4px;

    background-color: ${(props) => props.theme.userHeader.links.separatorColor};
    border-radius: 100%;
  }
`;

export const UserLogout = styled.div`
  cursor: pointer;

  color: ${(props) => props.theme.userHeader.links.fontColor};

  &:hover {
    text-decoration: underline;
  }
`;
