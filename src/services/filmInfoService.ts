import { IError, IMovie } from "../types/movies";
import axios, { AxiosError } from "axios";

const keyApi: string = import.meta.env.VITE_APP_APIKEY;
const pathApi: string = import.meta.env.VITE_APP_APIPATH;

export const FilmInfoService = {
  async getInfo(id: string) {
    const APIInfoURL = `${pathApi}/v2.2/films/${id}`;
    try {
      const { data } = await axios.get<IMovie>(APIInfoURL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": `${keyApi}`,
        },
      });
      return data;
    } catch (err) {
      const error = err as AxiosError<IError>;
      if (typeof error.response?.data.message === "string")
        return error.response?.data.message;
    }
  },
};
