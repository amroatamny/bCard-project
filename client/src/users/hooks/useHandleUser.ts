import { useCallback, useMemo, useState } from "react";
import { LoginType, TokenType } from "../models/types/userTypes";
import { useUser } from "../providers/UserProvider";
import useAxiosinterceptors from "../../hooks/useAxiosinterceptors";
import { login } from "../services/userApi";
import {
  getUser,
  removeToken,
  setTokenInLocalStorage,
} from "../services/localStorage";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

type errorType = null | string;

const useHandleUser = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<errorType>(null);
  const { setUser, setToken, user } = useUser();

  useAxiosinterceptors();
  const navigate = useNavigate();
  const requestStatus = (
    loading: boolean,
    errorMessage: errorType,
    user: null | TokenType
  ) => {
    setLoading(loading);
    setError(errorMessage);
    setUser(user);
  };

  const handleLogin = useCallback(
    async (user: LoginType) => {
      try {
        setLoading(true);
        const token = await login(user);
        setTokenInLocalStorage(token);
        setToken(token);
        const userFromLocalstorage = getUser();
        requestStatus(false, null, userFromLocalstorage);
        navigate(ROUTES.ROOT);
      } catch (error) {
        if (typeof error === "string") requestStatus(false, error, null);
      }
    },
    [setToken]
  );
  const handleLogout = useCallback(() => {
    removeToken();
    setUser(null);
  }, []);

  const value = useMemo(() => {
    return { isLoading, error, user };
  }, []);

  return { value, handleLogin, handleLogout };
};

export default useHandleUser;
