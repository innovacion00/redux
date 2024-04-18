import { IUser } from "./users.iterface";

export interface IUserWithId extends IUser {
  id: string;
}
