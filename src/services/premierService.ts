import { IPremier, IError } from "../types/movies";
import { MONTHS } from "../constants/months";
import axios, { AxiosError } from "axios";

const keyApi: string = import.meta.env.VITE_APP_APIKEY;
const pathApi: string = import.meta.env.VITE_APP_APIPATH;

export const PremierService = {
  async getPremier() {
    const date = new Date();
    const dateYearNow = date.getFullYear();
    const dateMonthNow: number = date.getUTCMonth();
    const APIPremiereURL = `${pathApi}/v2.2/films/premieres?year=${dateYearNow}&month=${
      MONTHS[`${dateMonthNow}`]
    }`;
    try {
      const { data } = await axios.get<Array<IPremier>>(APIPremiereURL, {
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
