import axios from "axios";
import { MONTHS } from "../constants/months";
const keyApi: string = import.meta.env.VITE_APP_APIKEY;
const pathApi: string = import.meta.env.VITE_APP_APIPATH;

export const DigitalReleasesService = {
  async getReleases() {
    const date = new Date();
    const dateYearNow = date.getFullYear();
    const dateMonthNow: number = date.getUTCMonth();

    const APIReleasesURL = `${pathApi}/v2.1/films/releases?year=${dateYearNow}&month=${
      MONTHS[`${dateMonthNow}`]
    }&page=1`;
    const data = await axios.get(APIReleasesURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": `${keyApi}`,
      },
    });
    return data;
  },
};
