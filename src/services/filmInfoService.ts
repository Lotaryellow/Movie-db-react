import axios from "axios";
import { IMovie } from "../types/movies";

const keyApi: string = import.meta.env.VITE_APP_APIKEY;
const pathApi: string = import.meta.env.VITE_APP_APIPATH;

export const FilmInfoService = {
  async getInfo(id: string) {
    const APIInfoURL = `${pathApi}/v2.2/films/${id}`;

    const { data } = await axios.get<IMovie>(APIInfoURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": `${keyApi}`,
      },
    });
    return data;
  },
};
