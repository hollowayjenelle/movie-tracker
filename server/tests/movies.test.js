import { getAllMovies } from "../controllers/moviesController";
import Movie from "../models/movie";
import { Op } from "sequelize";

jest.mock("../models/movie");

const mockMovies = [
  {
    id: 950396,
    title: "The Gorge",
    poster: "/7iMBZzVZtG0oBug4TfqDb9ZxAOa.jpg",
    release_date: "2025-02-13",
    vote_average: 7.834,
    vote_count: 1226,
  },
  {
    id: 762509,
    title: "Mufasa: The Lion King",
    poster: "/9bXHaLlsFYpJUutg4E6WXAjaxDi.jpg",
    release_date: "2024-12-18",
    vote_average: 7.453,
    vote_count: 1356,
  },
];

describe("getAllMovies", () => {
  let req, res;

  beforeEach(() => {
    req = {
      query: {},
    };

    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should return all movies when no title query is provided", async () => {
    Movie.findAll.mockResolvedValue(mockMovies);

    await getAllMovies(req, res);
    expect(res.status().json).toBeCalledWith(mockMovies);
    expect(res.status).toBeCalledWith(200);
  });
  it("should return movies that match with the title query provide", async () => {
    req.query.title = "Mufasa";
    Movie.findAll.mockResolvedValue(
      mockMovies.filter((movie) => movie.title.includes("Mufasa"))
    );

    await getAllMovies(req, res);
    expect(res.status().json).toHaveBeenCalledWith([
      {
        id: 762509,
        title: "Mufasa: The Lion King",
        poster: "/9bXHaLlsFYpJUutg4E6WXAjaxDi.jpg",
        release_date: "2024-12-18",
        vote_average: 7.453,
        vote_count: 1356,
      },
    ]);

    expect(Movie.findAll).toHaveBeenCalledWith({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      where: {
        title: { [Op.substring]: "Mufasa" },
      },
    });
  });
});
