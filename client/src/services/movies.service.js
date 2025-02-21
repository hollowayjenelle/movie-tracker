import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const getAll = () => {
  return http.get("/movies");
};

const findByTitle = (title) => {
  return http.get(`/movies/movie?title=${title}`);
};

export default { getAll, findByTitle };
