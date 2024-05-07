import { useState } from "react";
import CardInterface from "../interface/CardInterface";
import { getCards } from "../services/cardapi";

type errorType = null | string;
type cardType = CardInterface[] | null;
const useCards = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<errorType>(null);
  const [cards, setCards] = useState<cardType>(null);

  const requestStatus = (
    loading: boolean,
    errorMessage: errorType,
    cards: cardType
  ) => {
    setLoading(loading);
    setError(errorMessage);
    setCards(cards);
  };

  const handleGetCards = async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      requestStatus(false, null, cards);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null);
    }
  };

  return { isLoading, error, cards, handleGetCards };
};
export default useCards;
