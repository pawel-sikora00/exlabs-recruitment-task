import axios from "axios";

export const baseUrl = axios.create({
  baseURL: "https://api.punkapi.com/v2",
});
