import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const findByActor = (name) => {
  return http.get(`/actors?name=${name}`);
};
