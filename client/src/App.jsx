import { useState } from "react";
import { useRoutes } from "react-router-dom";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);

  return routes;
}

export default App;
