import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAll = () => {
  return http.get("/movies");
};

export const findByTitle = (title) => {
  return http.get(`/movies/movie?title=${title}`);
};
