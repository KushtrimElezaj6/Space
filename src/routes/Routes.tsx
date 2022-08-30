import React from "react";
import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { MyProfile } from "../pages/MyProfile/MyProfile";
import { Register } from "../pages/Register/Register";

import MyMovies from "../pages/MyMovies/MyMovies";

import { RouteWrapper } from "../lib/RouteWrapper/RouteWrapper";
import Account from "../pages/MyProfile/Account";
import Privacy from "../pages/MyProfile/Privacy";
import DeactivateAccount from "../pages/MyProfile/DeactivateAccount";
import { Posts } from "../pages/Posts/Posts";
import { Comments } from "../pages/Comments/Comments";
import { Photos } from "../pages/Photos/Photos";
import { MyMoviesAction } from "../pages/MyMovies/MyMoviesAction";
import { MyMoviesComedy } from "../pages/MyMovies/MyMoviesComedy";
import { MyMoviesHorror } from "../pages/MyMovies/MyMoviesHorror";
import { Admin } from "../pages/Admin/Admin";
import { PageNotFound } from "../pages/PageNotFound/PageNotFound";
import { RoleWrapper } from "../lib/RoleWrapper/RoleWrapper";

const Routes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: (
        <RouteWrapper routeType="protected">
          <Home />
        </RouteWrapper>
      ),
    },
    {
      path: "/posts",
      element: (
        <RouteWrapper routeType="protected">
          <Posts />
        </RouteWrapper>
      ),
    },
    {
      path: "/comments",
      element: (
        <RouteWrapper routeType="protected">
          <Comments />
        </RouteWrapper>
      ),
    },
    {
      path: "/photos",
      element: (
        <RouteWrapper routeType="protected">
          <Photos />
        </RouteWrapper>
      ),
    },
    {
      path: "/login",
      element: (
        <RouteWrapper routeType="guest">
          <Login />
        </RouteWrapper>
      ),
    },
    {
      path: "/register",
      element: (
        <RouteWrapper routeType="guest">
          <Register />
        </RouteWrapper>
      ),
    },
    {
      path: "/my-profile",
      element: (
        <RouteWrapper routeType="protected">
          <MyProfile />
        </RouteWrapper>
      ),
      children: [
        { path: "account", element: <Account /> },
        { path: "privacy", element: <Privacy /> },
        { path: "deactivate-account", element: <DeactivateAccount /> },
      ],
    },
    {
      path: "/my-movies",
      element: (
        <RouteWrapper routeType="protected">
          <MyMovies />
        </RouteWrapper>
      ),
      children: [
        { path: "action", element: <MyMoviesAction /> },
        { path: "comedy", element: <MyMoviesComedy /> },
        { path: "horror", element: <MyMoviesHorror /> },
      ],
    },
    {
      path: "/admin",
      element: (
        <RoleWrapper role={["admin", "editor"]}>
          <RouteWrapper routeType="protected">
            <Admin />
          </RouteWrapper>
        </RoleWrapper>
      ),
    },
    { path: "*", element: <PageNotFound /> },
  ]);

  return element;
};

export default Routes;
