import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { store } from "../store/store";
import { Provider } from "react-redux";
import Search from "../components/Search";
import DisplayArea from "../components/DisplayArea";
import { mockMovies, mockMovie } from "./mocks";
import { getByTitle } from "../store/thunks/getByTitlethunk";
import { getByGenre } from "../store/thunks/getByGenrethunk";
import { getByActor } from "../store/thunks/getByActorthunk";

describe("Search component", () => {
  it("should render search component", () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(screen.getByText("Movie")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("Search");
  });
  it("should get all movies that match search word - search by movie", async () => {
    render(
      <Provider store={store}>
        <Search />
        <DisplayArea dataset={mockMovies} />
      </Provider>
    );

    const inputField = screen.getByRole("textbox");
    await fireEvent.change(inputField, { target: { value: "Mufasa" } });

    const search = await screen.findByRole("button", { name: "Search" });
    await fireEvent.click(search);

    store.dispatch(getByTitle("Mufasa"));

    await waitFor(() => {
      const movies = store.getState().movies.allMovies;
      const movieExists = movies.find(
        (movie) => movie.title === "Mufasa: The Lion King"
      );
      expect(movieExists).toBeDefined();
      expect(screen.getByText("Mufasa: The Lion King")).toBeInTheDocument();
    });
  });
  it("should get all movies that match search word - search by genre", async () => {
    render(
      <Provider store={store}>
        <Search />
        <DisplayArea dataset={mockMovies} />
      </Provider>
    );

    const dropdown = await screen.findByRole("combobox");

    await fireEvent.mouseDown(dropdown);
    await fireEvent.click(screen.getByTestId("search-genre"));

    const inputField = screen.getByRole("textbox");
    await fireEvent.change(inputField, { target: { value: "Romance" } });

    const search = await screen.findByRole("button", { name: "Search" });
    await fireEvent.click(search);

    store.dispatch(getByGenre("Romance"));

    await waitFor(() => {
      const movies = store.getState().movies.allMovies;
      const isRomanceMovie = movies.find(
        (movie) => movie.MovieGenres.genreId === 10749
      );
      expect(isRomanceMovie).toBeDefined();
    });
  });
  it("should get all movies that match search word - search by actor", async () => {
    render(
      <Provider store={store}>
        <Search />
        <DisplayArea dataset={mockMovies} />
      </Provider>
    );

    const dropdown = await screen.findByRole("combobox");

    await fireEvent.mouseDown(dropdown);
    await fireEvent.click(screen.getByTestId("search-actor"));

    const inputField = screen.getByRole("textbox");
    await fireEvent.change(inputField, { target: { value: "Mark Wahlberg" } });

    const search = await screen.findByRole("button", { name: "Search" });
    await fireEvent.click(search);

    store.dispatch(getByActor("Mark Wahlberg"));

    await waitFor(() => {
      const movies = store.getState().movies.allMovies;
      console.log(movies);
      const movieExists = movies.find((movie) => movie.title === "Flight Risk");
      expect(movieExists).toBeDefined();
    });
  });
});
