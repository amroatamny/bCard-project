import { useCallback, useMemo, useState } from "react";
import {
  LoginType,
  RegistrationForm,
  TokenType,
} from "../models/types/userTypes";
import { useUser } from "../providers/UserProvider";
import useAxiosinterceptors from "../../hooks/useAxiosinterceptors";
import { login, signup } from "../services/userApi";
import {
  getUser,
  removeToken,
  setTokenInLocalStorage,
} from "../services/localStorage";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import signupInterface from "../interface/SignupInterface";
import normalizeUser from "../helpers/normalization/normalizeUser";

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

  const handleSignup = useCallback(
    async (user: RegistrationForm) => {
      try {
        const normalizedUser = normalizeUser(user);
        await signup(normalizedUser);
        await handleLogin({
          email: user.email,
          password: user.password,
        });
      } catch (error) {
        if (typeof error === "string") requestStatus(false, error, null);
      }
    },
    [requestStatus, handleLogin]
  );

  const value = useMemo(() => {
    return { isLoading, error, user };
  }, []);

  return { value, handleLogin, handleLogout, handleSignup };
};

export default useHandleUser;
