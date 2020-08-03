/* eslint-disable no-restricted-globals */
import React, { useContext } from "react";
import Cookies from "universal-cookie";
import { Redirect } from "react-router-dom";
import { onSuccessMessage } from "../BaseLayout/AuthForm";
import { userContext } from "../../Context/Context";
const cookies = new Cookies();

interface User {
  email: string;
  uid: string | undefined;
}

const setCookie = (c: Cookies, name: string, value: any) => {
  c.set(name, value, { path: "/", maxAge: 31536000 });
};

export const setUsetInCocke = (user: User) => {
  setCookie(cookies, "user", JSON.stringify(user));
};

export const isAuthenticate = () => {
  if (window !== undefined) {
    const user = cookies.get("user");
    console.log(user);

    return user;
  }
  return "";
};

export const isSignOut = () => {
  cookies.remove("user");
  onSuccessMessage("You have successfull logout");
};
