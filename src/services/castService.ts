import axios from "axios";
import { ICast } from "../types/movies";

const keyApi: string = import.meta.env.VITE_APP_APIKEY;
const pathApi: string = import.meta.env.VITE_APP_APIPATH;

export const CastService = {
  async getCast(id: string) {
    const APICastURL = `${pathApi}/v1/staff?filmId=${id + ""}`;
    const { data } = await axios.get<Array<ICast>>(APICastURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": `${keyApi}`,
      },
    });
    return data;
  },
};
