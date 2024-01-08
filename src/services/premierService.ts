import { MONTHS } from "../constants/months";
import { IPremier } from "../types/movies";
import axios from "axios";

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

    const { data } = await axios.get<Array<IPremier>>(APIPremiereURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": `${keyApi}`,
      },
    });
    return data;
  },
};
