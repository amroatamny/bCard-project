import axios, { AxiosRequestConfig } from "axios";
import UserType, {
  Login,
  NormalizedEditUser,
  // LoginType,
  // NormalizedEditUser,
  RegistrationForm,
  TokenType,
  UserRegistered,
} from "../models/types/userTypes";
import signupInterface from "../interface/SignupInterface";
import { getUser } from "./localStorage";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8181";

export const login = async (user: Login) => {
  try {
    const { data } = await axios.post<string>(`${apiUrl}/users/login`, user);
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    console.error(error);
    return Promise.reject("An unexpected error occurred!");
  }
};
export const signup = async (user: UserType) => {
  try {
    const { data } = await axios.post<UserRegistered>(`${apiUrl}/users`, user);
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    console.error(error);
    return Promise.reject("An unexpected error occurred!");
  }
};
export const getUserFromServer = async (userId: string) => {
  try {
    const { data } = await axios.get<signupInterface>(
      `${apiUrl}/users/${userId}`
    );

    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};
export const editUser = async (normalizedUser: NormalizedEditUser) => {
  try {
    const UserToServer = { ...normalizedUser };
    delete UserToServer._id;
    const { data } = await axios.put<signupInterface>(
      `${apiUrl}/users/${normalizedUser._id}`,
      UserToServer
    );
    console.log(data);

    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    console.error(error);
    return Promise.reject("An unexpected error occurred!");
  }
};
