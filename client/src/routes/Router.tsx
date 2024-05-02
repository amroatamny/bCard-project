import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES, {
  SANDBOX_ROUTES_FATHER,
  SANDBOX_ROUTES_SONS,
} from "./routesModel";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../users/pages/LoginPage";
import SingupPage from "../users/pages/SingupPage";
import MyCards from "../pages/MyCardsPage";
import FavCardsPage from "../pages/FavCardsPage";

import CardDetailsPage from "../cards/pages/CardDetailsPage";
import SandboxMenu from "../sandbox/SandboxMenu";
import Template from "../sandbox/components/Template";
import ComponentMenu from "../sandbox/components/ComponentMenu";
import Logic from "../sandbox/components/Logic";
import StyleTest from "../sandbox/components/styles/StyleTest";
import EventsMenu from "../sandbox/events/EventsMenu";
import IntroductionMenuPage from "../sandbox/introduction/IntroductionMenuPage";
import MuiSandboxMenuPage from "../sandbox/mui-sandbox/MuiSandboxMenuPage";
import NavigationsMenuPage from "../sandbox/navigations/NavigationsMenuPage";
import PropsMenuPage from "../sandbox/props/PropsMenuPage";
import UseStateMenuPage from "../sandbox/use-state/UseStateMenuPage";
import RaisingEvents from "../sandbox/events/RaisingEvents";
import OnClick from "../sandbox/events/OnClick";
import Babel from "../sandbox/introduction/babel";
import MuiTypography from "../sandbox/mui-sandbox/data-display/MuiTypography";
import MuiAppBar from "../sandbox/navigations/MuiAppBar";
import MuiBottomNavigation from "../sandbox/navigations/MuiBottomNavigation";
import SetPost from "../sandbox/use-state/SetPost";
import UseStateWithArrayOfObjects from "../sandbox/use-state/UseStateWithArrayOfObjects";
import UseStateWithComplexObject from "../sandbox/use-state/UseStateWithComplexObject";
import SetPosts from "../sandbox/use-state/SetPosts";
import UseState from "../sandbox/use-state/UseState";
import UseStateWithFunction from "../sandbox/use-state/UseStateWithFunction";
import UseStateWithObject from "../sandbox/use-state/UseStateWithObject";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route
        path={`${ROUTES.CARD_DETATLS}/:cardId`}
        element={<CardDetailsPage />}
      />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.SINGUP} element={<SingupPage />} />
      <Route path={ROUTES.MY_CARDS} element={<MyCards />} />
      <Route path={ROUTES.FAV_CARDS} element={<FavCardsPage />} />

      <Route path={ROUTES.SANDBOX} element={<SandboxMenu />}>
        <Route
          path={SANDBOX_ROUTES_FATHER.COMPONENT}
          element={<ComponentMenu />}
        >
          <Route path={SANDBOX_ROUTES_SONS.TEMPLATE} element={<Template />} />
          <Route path={SANDBOX_ROUTES_SONS.LOGIC} element={<Logic />} />
          <Route path={SANDBOX_ROUTES_SONS.STYLES} element={<StyleTest />} />
        </Route>

        <Route path={SANDBOX_ROUTES_FATHER.EVENTS} element={<EventsMenu />}>
          <Route
            path={SANDBOX_ROUTES_SONS.EVENT_RAISING_EVENT}
            element={<RaisingEvents />}
          />

          <Route
            path={SANDBOX_ROUTES_SONS.EVENT_ONCLICK}
            element={<OnClick />}
          />
        </Route>

        <Route
          path={SANDBOX_ROUTES_FATHER.INTRODUCTION}
          element={<IntroductionMenuPage />}
        >
          <Route
            path={SANDBOX_ROUTES_SONS.INTRODUCTION_BABLE}
            element={<Babel />}
          />
        </Route>

        <Route
          path={SANDBOX_ROUTES_FATHER.MUI_SANDBOX}
          element={<MuiSandboxMenuPage />}
        >
          <Route
            path={SANDBOX_ROUTES_SONS.MUI_SANDBOX_MUI_TYPOGRAPHY}
            element={<MuiTypography />}
          />
        </Route>

        <Route
          path={SANDBOX_ROUTES_FATHER.NAVIGATION}
          element={<NavigationsMenuPage />}
        >
          <Route
            path={SANDBOX_ROUTES_SONS.NAVIGATION_MUI_APP_BAR}
            element={<MuiAppBar />}
          />{" "}
          <Route
            path={SANDBOX_ROUTES_SONS.NAVIGATION_MUI_BOTTOM_NAVIGATION}
            element={<MuiBottomNavigation />}
          />
        </Route>

        <Route
          path={SANDBOX_ROUTES_FATHER.PROPS}
          element={<PropsMenuPage />}
        ></Route>
        <Route
          path={SANDBOX_ROUTES_FATHER.USE_STATE}
          element={<UseStateMenuPage />}
        >
          <Route
            path={SANDBOX_ROUTES_SONS.USE_STATE_SEET_POST}
            element={<SetPost />}
          />

          <Route
            path={SANDBOX_ROUTES_SONS.USE_STATE_ARRAY_OF_OBJ}
            element={<UseStateWithArrayOfObjects />}
          />

          <Route
            path={SANDBOX_ROUTES_SONS.USE_STATE_COMPLEX_OBJ}
            element={<UseStateWithComplexObject />}
          />
          <Route
            path={SANDBOX_ROUTES_SONS.USE_STATE_SET_POSTS}
            element={<SetPosts />}
          />
          <Route
            path={SANDBOX_ROUTES_SONS.USE_STATE_USE_STATE}
            element={<UseState />}
          />
          <Route
            path={SANDBOX_ROUTES_SONS.USE_STATE_WITH_FUNCTION}
            element={<UseStateWithFunction />}
          />
          <Route
            path={SANDBOX_ROUTES_SONS.USE_STATE_WITH_OBJ}
            element={<UseStateWithObject />}
          />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
