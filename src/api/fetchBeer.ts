import { baseUrl } from "./baseUrl";

export const getBeer = async (id: number) => {
  const { data } = await baseUrl.get(`/beers/${id}`);
  const beer: Beer = data[0];
  return beer;
};
