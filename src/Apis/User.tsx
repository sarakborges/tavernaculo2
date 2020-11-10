import { IUser } from "Interfaces/User";

const getLogin = async (email: string, pass: string) => {
  const userInfo: IUser = {
    id: "1",
    email: "sarakborges@outlook.com",
    password: "1234",
    name: "Sara",
    avatar: `https://image.yoble.us/avatar/uma-bandeira-de-piratas5f85e540f1e3c.png`,
  };

  return email === userInfo.email && pass === userInfo.password
    ? {
        user: userInfo,
        token: 1,
      }
    : false;
};

const UserAPI = {
  getLogin,
};

export default UserAPI;
