import React from "react";
import "@testing-library/jest-dom";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
} from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { store } from "../store/store";
import { Provider } from "react-redux";
import Search from "../components/Search";
import DisplayArea from "../components/DisplayArea";
import { mockMovies, mockMovie, mockGenre } from "./mocks";
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
      const state = store.getState();
      expect(state.movies.allMovies).toContainEqual(mockMovie);
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
      expect(screen.getByText("The Gorge")).toBeInTheDocument();
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
      expect(screen.getByText("Flight Risk")).toBeInTheDocument();
    });
  });
});
