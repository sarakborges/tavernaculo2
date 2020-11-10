import { IUser } from "Interfaces/User";

import MUsers from "./Mocks/Users";

const getLogin = async (email: string, pass: string) => {
  const userInfo: IUser = MUsers.find(
    (user) => user.email === email && user.password === pass
  )!;

  return !!userInfo
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
