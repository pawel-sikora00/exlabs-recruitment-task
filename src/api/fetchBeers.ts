import axios from "axios";
import { baseUrl } from "./baseUrl";

export const beersPerPageAmount = 12;

export const getBeers = async (pageParam = 1) => {
  const { data } = await baseUrl.get(
    `/beers?page=${pageParam}&per_page=${beersPerPageAmount}`
  );
  const beers: Beer[] = data;
  return beers;
};
