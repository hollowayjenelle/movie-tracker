import axios from "axios";

const http = axios.create({
  baseURL: "https://movie-tracker-prod-42ea18da9dc1.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAll = () => {
  return http.get("/movies");
};

export const findByTitle = (title) => {
  return http.get(`/movies?title=${title}`);
};
