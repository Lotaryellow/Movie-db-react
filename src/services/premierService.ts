import axios from "axios";
import { MONTHS } from "../constants/months";
const keyApi = import.meta.env.VITE_APP_APIKEY;
const pathApi = import.meta.env.VITE_APP_APIPATH;

export const PremierService = {
  async getPremier() {
    const date = new Date();
    const dateYearNow = date.getFullYear();
    const dateMonthNow: number = date.getUTCMonth();
    const APIPremiereURL = `${pathApi}/v2.2/films/premieres?year=${dateYearNow}&month=${
      MONTHS[`${dateMonthNow}`]
    }`;
    const data = await axios.get(APIPremiereURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": `${keyApi}`,
      },
    });
    return data;
  },
};
