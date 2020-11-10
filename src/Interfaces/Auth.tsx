import { IUser } from "Interfaces/User";

export interface IAuth {
  isAuthed: boolean | undefined;
  token: string;
  user: IUser | undefined;
}
