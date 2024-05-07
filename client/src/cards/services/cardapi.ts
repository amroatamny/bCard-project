import axios from "axios";
import CardInterface from "../interface/CardInterface";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8181";
export const getCards = async () => {
  try {
    const { data } = await axios.get<CardInterface[]>(`${apiUrl}/cards`);
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    console.error(error);
    return Promise.reject("An unexpected error occurred!");
  }
};
