import { IError, ISearchingMovie } from "../types/movies";
import axios, { AxiosError } from "axios";

const keyApi: string = import.meta.env.VITE_APP_APIKEY;
const pathApi: string = import.meta.env.VITE_APP_APIPATH;
interface SearchingMovieResponse {
  films: Array<ISearchingMovie>;
}

export const SearchService = {
  async getSearch(searchItemName: string) {
    const APISearchURL = `${pathApi}/v2.1/films/search-by-keyword?keyword=${searchItemName}`;
    try {
      const { data } = await axios.get<SearchingMovieResponse>(APISearchURL, {
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
