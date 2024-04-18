import { createSlice } from "@reduxjs/toolkit";
import { IUserWithId } from "../../interfaces";

const initialState: IUserWithId[] = [
  {
    id: "1",
    name: "John Doe",
    email: "johnd@gmail.com",
    github: "kikobeats",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "janesmith@gmail.com",
    github: "kikobeats",
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mikejohnson@gmail.com",
    github: "kikobeats",
  },
  {
    id: "4",
    name: "Sarah Williams",
    email: "sarahwilliams@gmail.com",
    github: "kikobeats",
  },
  {
    id: "5",
    name: "Chris Brown",
    email: "chrisbrown@gmail.com",
    github: "kikobeats",
  },
];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUserById: (state, action) => {
      const id = action.payload;
      return state.filter((users) => users.id !== id);
    },
  },
});

export default usersSlice.reducer;
