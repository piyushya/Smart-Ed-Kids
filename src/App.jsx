import "./styles/App.css";
import React, { Suspense, useState } from "react";
import { createContext } from "react";

const Signup = React.lazy(() => import("./pages/Signup"));
const Login = React.lazy(() => import("./pages/Login"));
const Home = React.lazy(() => import("./pages/Home"));
const Module = React.lazy(() => import("./pages/Module"));
const Course = React.lazy(() => import("./pages/Course"));
const Chapter = React.lazy(() => import("./pages/Chapter"));

import Loader from "./components/Loader";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const ToolTipContext = createContext({
  tooltip_title: "",
  setTooltip_title: () => {},
});

export const UserDataContext = createContext({
  username: "",
  agegroup: 0,
  language: "english",
});

export default function App() {
  const [tooltip_title, setTooltip_title] = useState("");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/course",
      element: <Course />,
    },
    {
      path: "/chapter/:chapter",
      element: <Chapter />,
    },
    {
      path: "/module/:id",
      element: <Module />,
    },
  ]);

  return (
    // <UserDataContext.Provider value={{ "", 0, "english"}}>
    <ToolTipContext.Provider value={{ tooltip_title, setTooltip_title }}>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </ToolTipContext.Provider>
    // </UserDataContext.Provider>
  );
}
