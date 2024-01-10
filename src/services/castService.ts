import { ICast, IError } from "../types/movies";
import axios, { AxiosError } from "axios";

const keyApi: string = import.meta.env.VITE_APP_APIKEY;
const pathApi: string = import.meta.env.VITE_APP_APIPATH;

export const CastService = {
  async getCast(id: string) {
    const APICastURL = `${pathApi}/v1/staff?filmId=${id}`;

    try {
      const { data } = await axios.get<Array<ICast>>(APICastURL, {
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
