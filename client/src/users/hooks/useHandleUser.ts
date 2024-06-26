import { useCallback, useMemo, useState } from "react";
import {
  Login,
  RegistrationForm,
  TokenType,
  UserMapToModelType,
  UserRegistered,
} from "../models/types/userTypes";
import { useUser } from "../providers/UserProvider";
import useAxiosinterceptors from "../../hooks/useAxiosinterceptors";
import {
  editUser,
  getUserFromServer,
  login,
  signup,
} from "../services/userApi";
import {
  getUser,
  removeToken,
  setTokenInLocalStorage,
} from "../services/localStorage";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

import normalizeUser from "../helpers/normalization/normalizeUser";
import { useSnack } from "../../provider/SnackbarProvider";
import normalizeEditUser from "../helpers/normalization/normalizeEditUser";
import signupInterface from "../interface/SignupInterface";

type errorType = null | string;
type userType = null | UserRegistered;
const useHandleUser = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<errorType>(null);

  const { setUser, setToken, user } = useUser();
  const snack = useSnack();
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
    async (user: Login) => {
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
        snack("success", "You have successfully registered and logged in.");
      } catch (error) {
        if (typeof error === "string") requestStatus(false, error, null);
      }
    },
    [requestStatus, handleLogin]
  );

  const handleGetUser = async (cardId: string) => {
    try {
      setLoading(true);
      const user = await getUserFromServer(cardId);
      requestStatus(false, null, user);
      return user;
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null);
    }
  };

  const handleUpdateUser = async (userFromClient: UserMapToModelType) => {
    try {
      setLoading(true);
      const newnormalizeUser = normalizeEditUser(userFromClient);
      const userFromServer = await editUser(newnormalizeUser);
      requestStatus(false, null, userFromServer);
      snack("success", "The business card has been successfully updated");
      navigate(ROUTES.ROOT);
    } catch (error) {
      if (typeof error === "string") return requestStatus(false, error, null);
    }
  };

  const value = useMemo(() => {
    return { isLoading, error, user };
  }, []);

  return {
    value,
    handleLogin,
    handleLogout,
    handleSignup,
    handleUpdateUser,
    handleGetUser,
  };
};

export default useHandleUser;
