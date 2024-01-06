import axios from "axios";
import { ITop } from "../types/movies";

const keyApi: string = import.meta.env.VITE_APP_APIKEY;
const pathApi: string = import.meta.env.VITE_APP_APIPATH;

export const TopService = {
  async getTop(topName: string) {
    const APITopURL = `${pathApi}/v2.2/films/collections?type=${topName}&page=1`;
    const data = await axios.get<Array<ITop>>(APITopURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": `${keyApi}`,
      },
    });
    return data;
  },
};
