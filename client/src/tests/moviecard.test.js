import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import MovieCard from "../components/MovieCard";
import { store } from "../store/store";
import { Provider } from "react-redux";

const mockMovie = {
  id: 762509,
  title: "Mufasa: The Lion King",
  poster: "/9bXHaLlsFYpJUutg4E6WXAjaxDi.jpg",
  release_date: "2024-12-18",
  vote_average: 7.453,
  vote_count: 1356,
};

describe("Movie Card Component", () => {
  it("should render movie details", () => {
    render(
      <Provider store={store}>
        <MovieCard
          title={mockMovie.title}
          imageURL={mockMovie.poster}
          releaseDate={mockMovie.release_date}
          voteAvg={mockMovie.vote_average}
          voteCount={mockMovie.vote_count}
          id={mockMovie.id}
        />
      </Provider>
    );

    expect(screen.getByText("Released: Dec 18th 2024")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("Add to Watched List");
    expect(screen.getByText("7.5 - 1356 reviews")).toBeInTheDocument();
  });
  it("should display rating dialog on button click", () => {
    render(
      <Provider store={store}>
        <MovieCard
          title={mockMovie.title}
          imageURL={mockMovie.poster}
          releaseDate={mockMovie.release_date}
          voteAvg={mockMovie.vote_average}
          voteCount={mockMovie.vote_count}
          id={mockMovie.id}
        />
      </Provider>
    );
    const addToButton = screen.getByText("Add to Watched List");
    fireEvent.click(addToButton);
    expect(
      screen.getByText("How would you rate Mufasa: The Lion King?")
    ).toBeInTheDocument();
  });
  it("should display Already Watched and Rated disabled button after rating movie", () => {
    render(
      <Provider store={store}>
        <MovieCard
          title={mockMovie.title}
          imageURL={mockMovie.poster}
          releaseDate={mockMovie.release_date}
          voteAvg={mockMovie.vote_average}
          voteCount={mockMovie.vote_count}
          id={mockMovie.id}
        />
      </Provider>
    );
    const addToButton = screen.getByText("Add to Watched List");
    fireEvent.click(addToButton);

    const submitButton = screen.getByText("Submit Rating");
    fireEvent.click(submitButton);

    expect(screen.getByText("Already Watched and Rated!")).toBeInTheDocument();
  });
});
