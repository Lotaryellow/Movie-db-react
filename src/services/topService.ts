import { IError, ITop } from "../types/movies";
import axios, { AxiosError } from "axios";

const keyApi: string = import.meta.env.VITE_APP_APIKEY;
const pathApi: string = import.meta.env.VITE_APP_APIPATH;

export const TopService = {
  async getTop(topName: string) {
    const APITopURL = `${pathApi}/v2.2/films/collections?type=${topName}&page=1`;
    try {
      const { data } = await axios.get<Array<ITop>>(APITopURL, {
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
