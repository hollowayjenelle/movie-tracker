import getAllMoviesByGenre from "../controllers/genresController";
import Genre from "../models/genre";
import Movie from "../models/movie";
import { Op } from "sequelize";

jest.mock("../models/genre");

const mockGenre = {
  id: 18,
  movies: [],
  name: "Drama",
};

describe("getMoviesByGenre", () => {
  let req = {
    query: { genre: "Drama" },
  };

  let res = {
    json: jest.fn(),
    status: jest.fn().mockReturnThis(),
  };

  it("should return all movies that match the genre", async () => {
    Genre.findAll.mockResolvedValue(mockGenre);

    await getAllMoviesByGenre(req, res);
    expect(res.status().json).toBeCalledWith(mockGenre);
    expect(res.status).toBeCalledWith(200);
    expect(Genre.findAll).toBeCalledWith({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      where: {
        name: {
          [Op.iLike]: "Drama",
        },
      },
      include: Movie,
    });
  });
});
