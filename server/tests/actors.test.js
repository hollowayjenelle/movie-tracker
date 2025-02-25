import { getAllMoviesByActor } from "../controllers/actorsController";
import Actor from "../models/actor";
import Movie from "../models/movie";
import { Op } from "sequelize";

jest.mock("../models/actor");

const mockActor = {
  id: 1763709,
  movies: [
    {
      id: 762509,
      title: "Mufasa: The Lion King",
      poster: "/9bXHaLlsFYpJUutg4E6WXAjaxDi.jpg",
      release_date: "2024-12-18",
      vote_average: 7.453,
      vote_count: 1356,
    },
  ],
  name: "Aaron Pierre",
};
describe("getMovieByActor", () => {
  let req = {
    query: { name: "Aaron Pierre" },
  };

  let res = {
    json: jest.fn(),
    status: jest.fn().mockReturnThis(),
  };

  it("should return all the movies the actor stars in", async () => {
    Actor.findAll.mockResolvedValue(mockActor);

    await getAllMoviesByActor(req, res);
    expect(res.status().json).toBeCalledWith(mockActor);
    expect(res.status).toBeCalledWith(200);
    expect(Actor.findAll).toBeCalledWith({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      where: {
        name: {
          [Op.substring]: "Aaron Pierre",
        },
      },
      include: Movie,
    });
  });
});
