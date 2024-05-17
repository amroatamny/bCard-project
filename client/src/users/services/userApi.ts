import axios from "axios";
import UserType, {
  Login,
  NormalizedEditUser,
  // LoginType,
  // NormalizedEditUser,
  RegistrationForm,
  UserRegistered,
} from "../models/types/userTypes";

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
export const editUser = async (normalizedUser: NormalizedEditUser) => {
  try {
    const UserToServer = { ...normalizedUser };
    delete UserToServer._id;
    const { data } = await axios.put<string>(
      `${apiUrl}/users/${normalizedUser._id}`
    );
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    console.error(error);
    return Promise.reject("An unexpected error occurred!");
  }
};
