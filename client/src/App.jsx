import { useState } from "react";
import { useRoutes } from "react-router-dom";
import WatchedMoviesPage from "./pages/WatchedMovies";
import HomePage from "./pages/Home";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/watched-movies",
      element: <WatchedMoviesPage />,
    },
  ]);

  return routes;
}

export default App;
