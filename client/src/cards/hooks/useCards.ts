import { useState } from "react";
import CardInterface from "../interface/CardInterface";
import {
  changeLikeStatus,
  createCard,
  deleteBusinessCard,
  editCard,
  getCard,
  getCards,
  getMyCard,
} from "../services/cardapi";
import useAxiosinterceptors from "../../hooks/useAxiosinterceptors";

type errorType = null | string;
type cardsType = CardInterface[] | null;
type cardType = CardInterface | null;

const useCards = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<errorType>(null);
  const [cards, setCards] = useState<cardsType>(null);
  const [card, setCard] = useState<cardType>(null);

  useAxiosinterceptors();

  const requestStatus = (
    loading: boolean,
    errorMessage: errorType,
    cards: cardsType,
    card: cardType
  ) => {
    setLoading(loading);
    setError(errorMessage);
    setCards(cards);
    setCard(card);
  };

  const handleGetCards = async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      requestStatus(false, null, cards, null);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null, null);
    }
  };

  const handleGetCard = async (cardId: string) => {
    try {
      setLoading(true);
      const card = await getCard(cardId);
      requestStatus(false, null, null, card);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null, null);
    }
  };

  const handleGetMyCards = async () => {
    try {
      setLoading(true);
      const card = await getMyCard();
      requestStatus(false, null, cards, card);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null, null);
    }
  };

  const HandleCreateCard = async (cardFromClient: CardInterface) => {
    try {
      setLoading(true);
      const card = await createCard(cardFromClient);
      requestStatus(false, null, null, card);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null, null);
    }
  };

  const handleUpdateCard = async (cardFromClient: CardInterface) => {
    try {
      setLoading(true);
      const card = await editCard(cardFromClient);
      requestStatus(false, null, null, card);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null, null);
    }
  };

  const handleDeleteCard = async (cardId: string) => {
    try {
      setLoading(true);
      const card = await deleteBusinessCard(cardId);
      requestStatus(false, null, null, card);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null, null);
    }
  };

  const handleLikeCard = async (cardId: string) => {
    try {
      setLoading(true);
      const card = await changeLikeStatus(cardId);
      const cards = await getCards();
      requestStatus(false, null, cards, card);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null, null);
    }
  };

  return {
    isLoading,
    error,
    cards,
    card,
    handleGetCards,
    handleDeleteCard,
    handleGetCard,
    handleGetMyCards,
    handleLikeCard,
    handleUpdateCard,
    HandleCreateCard,
  };
};
export default useCards;
