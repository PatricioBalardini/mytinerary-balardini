import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userActions";

const { readUsers, signIn, signInToken, signOut, upDateUser } = userActions;

const initialState = {
  users: [],
  user: {},
  token: "",
  messages: [],
};

const userReducer = createReducer(initialState, (build) =>
  build
    .addCase(readUsers.fulfilled, (state, action) => {
      let newState = {
        ...state,
        users: action.payload.users,
      };
      return newState;
    })
    .addCase(signIn.fulfilled, (state, action) => {
      let newState = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        messages: action.payload.messages,
      };
      return newState;
    })
    .addCase(signInToken.fulfilled, (state, action) => {
      let newState = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
      return newState;
    })
    .addCase(signOut.fulfilled, (state, action) => {
      let newState = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
      return newState;
    })
    .addCase(upDateUser.fulfilled, (state, action) => {
      let newState = {
        ...state,
        user: action.payload.user,
      };
      return newState;
    })
);

export default userReducer;
