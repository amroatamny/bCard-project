import { jwtDecode } from "jwt-decode";
import { TokenType } from "../models/types/userTypes";

const TOKEN = "token";

export const setTokenInLocalStorage = (encreptedToken: string) => {
  return localStorage.setItem(TOKEN, encreptedToken);
};

export const getUser = () => {
  const token = localStorage.getItem(TOKEN);
  if (!token) return null;
  const user: TokenType = jwtDecode(token);
  return user;
};

export const getToken = () => localStorage.getItem(TOKEN);

export const removeToken = () => localStorage.removeItem(TOKEN);
