import { useCallback, useEffect, useState } from "react";
import CardInterface from "../interface/CardInterface";
import {
  changeLikeStatus,
  createCard,
  deleteCard,
  editCard,
  getCard,
  getCards,
  getMyCards,
} from "../services/cardapi";
import useAxiosinterceptors from "../../hooks/useAxiosinterceptors";
import { useSnack } from "../../provider/SnackbarProvider";
import {
  CardFromClientType,
  CardMapToModelType,
} from "../models/types/cardTypes";
import normalizeCard from "../helpers/normalizations/normalizeCard";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import normalizeEditCard from "../helpers/normalizations/normalizeEditCard";
import { useUser } from "../../users/providers/UserProvider";

type CardsType = null | CardInterface[];
type CardType = null | CardInterface;
type ErrorType = null | string;

const useCards = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [cards, setCards] = useState<CardsType>(null);
  const [card, setCard] = useState<CardType>(null);
  const [query, setQuery] = useState("");
  const [filterCard, setFilter] = useState<any>(null);
  const [SearchParams] = useSearchParams();
  const Navigate = useNavigate();
  const snack = useSnack();
  const { user } = useUser();
  useAxiosinterceptors();

  useEffect(() => {
    setQuery(SearchParams.get("q") ?? "");
  }, [SearchParams]);

  useEffect(() => {
    if (cards) {
      setFilter(
        cards.filter(
          (card) =>
            card.title.includes(query) || String(card.bizNumber).includes(query)
        )
      );
    }
  }, [cards, query]);
  const requestStatus = (
    loading: boolean,
    errorMessage: ErrorType,
    cards: CardsType,
    card: CardType = null
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
      return card;
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null, null);
    }
  };

  const handleGetMyCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getMyCards();
      requestStatus(false, null, cards);
    } catch (error) {
      if (typeof error === "string") return requestStatus(false, error, null);
    }
  }, []);

  const HandleCreateCard = useCallback(
    async (cardFromClient: CardFromClientType) => {
      try {
        setLoading(true);
        const normalizedCard = normalizeCard(cardFromClient);
        const card = await createCard(normalizedCard);
        requestStatus(false, null, null, card);
        snack("success", "A new business card has been created");
        Navigate(ROUTES.MY_CARDS);
      } catch (error) {
        if (typeof error === "string") return requestStatus(false, error, null);
      }
    },
    []
  );

  const handleUpdateCard = useCallback(
    async (cardFromClient: CardMapToModelType) => {
      try {
        setLoading(true);
        const normalizedCard = normalizeEditCard(cardFromClient);
        const cardFomServer = await editCard(normalizedCard);
        requestStatus(false, null, null, cardFomServer);
        snack("success", "The business card has been successfully updated");
        Navigate(ROUTES.MY_CARDS);
      } catch (error) {
        if (typeof error === "string") return requestStatus(false, error, null);
      }
    },
    []
  );

  const handleDeleteCard = useCallback(async (cardId: string) => {
    try {
      setLoading(true);
      await deleteCard(cardId);
      snack("success", "The business card has been successfully deleted");
    } catch (error) {
      if (typeof error === "string") return requestStatus(false, error, null);
    }
  }, []);

  const handleLikeCard = async (cardId: string) => {
    try {
      setLoading(true);
      const card = await changeLikeStatus(cardId);
      requestStatus(false, null, cards, card);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null, null);
    }
  };
  const handleGetFavCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      const favCards = cards.filter(
        (card) => !!card.likes.find((id) => id === user?._id)
      );
      requestStatus(false, null, favCards);
    } catch (error) {
      if (typeof error === "string") return requestStatus(false, error, null);
    }
  }, [user]);
  return {
    isLoading,
    error,
    cards,
    card,
    filterCard,
    handleGetCards,
    handleDeleteCard,
    handleGetCard,
    handleGetMyCards,
    handleLikeCard,
    handleUpdateCard,
    HandleCreateCard,
    handleGetFavCards,
  };
};
export default useCards;
