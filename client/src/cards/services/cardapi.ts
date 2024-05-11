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
export const getCard = async (cardId: string) => {
  try {
    const { data } = await axios.get<CardInterface>(
      `${apiUrl}/cards/${cardId}`
    );
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    console.error(error);
    return Promise.reject("An unexpected error occurred!");
  }
};
export const getMyCard = async () => {
  try {
    const { data } = await axios.get<CardInterface>(`${apiUrl}/cards/my-cards`);
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    console.log(error);
    return Promise.reject("An unexpected error occurred!");
  }
};
export const createCard = async (card: CardInterface) => {
  try {
    const { data } = await axios.post(`${apiUrl}/cards/`, card);
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    console.log(error);
    return Promise.reject("An unexpected error occurred!");
  }
};
export const editCard = async (card: CardInterface) => {
  try {
    const { data } = await axios.put(`${apiUrl}/cards/${card._id}`, card);
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    console.log(error);
    return Promise.reject("An unexpected error occurred!");
  }
};
export const changeLikeStatus = async (cardId: string) => {
  try {
    const { data } = await axios.patch(`${apiUrl}/cards/${cardId}`);
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};
export const deleteBusinessCard = async (cardId: string) => {
  try {
    const { data } = await axios.delete(`${apiUrl}/cards/${cardId}`);
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};
