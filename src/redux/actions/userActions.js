import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const readUsers = createAsyncThunk("readUsers", async () => {
  try {
    let users = await axios(`${apiUrl}/users`);
    console.log(users);
    return {
      users: users.data.response,
    };
  } catch (error) {
    console.log(error);
    return {
      users: [],
    };
  }
});

const signIn = createAsyncThunk("signIn", async (payload) => {
  try {
    console.log(payload);
    let data = await axios.post(`${apiUrl}/auth/signin`, payload.data);
    localStorage.setItem("token", data.data.response.token);
    return {
      user: data.data.response.user,
      token: data.data.response.token,
      messages: [],
    };
  } catch (error) {
    console.log(error);
    return {
      user: {},
      token: "",
      messages: error.response.data.messages || [error.response.data.message],
    };
  }
});

const signInToken = createAsyncThunk("signInToken", async () => {
  try {
    let token = localStorage.getItem("token");
    let authorization = { headers: { Authorization: `Bearer ${token}` } };
    let data = await axios.post(`${apiUrl}/auth/token`, null, authorization);
    //console.log(data);
    localStorage.setItem("token", data.data.response.token);
    return {
      user: data.data.response.user,
      token: data.data.response.token,
    };
  } catch (error) {
    console.log(error);
    return {
      user: {},
      token: "",
    };
  }
});

const signOut = createAsyncThunk("signOut", async () => {
  try {
    let token = localStorage.getItem("token");
    let authorization = { headers: { Authorization: `Bearer ${token}` } };
    let data = await axios.post(`${apiUrl}/auth/signout`, null, authorization);
    console.log(data);
    localStorage.removeItem("token");
    return {
      user: {},
      token: "",
    };
  } catch (error) {
    console.log(error);
    return {
      user: {},
      token: "",
    };
  }
});

const upDateUser = createAsyncThunk("upDateUser", async () => {
  try {
    let token = localStorage.getItem("token");
    let authorization = { headers: { Authorization: `Bearer ${token}` } };
    let data = await axios.put(`${apiUrl}/users`, authorization);
    console.log(data);
    return {
      user: data.data.response,
    };
  } catch (error) {
    console.log(error);
    return {
      user: {},
    };
  }
});

const userActions = { readUsers, signIn, signInToken, signOut, upDateUser };
export default userActions;
