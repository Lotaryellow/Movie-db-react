import { getRandomInRange } from "../utils/randomInRange";
import { IError, IMovie } from "../types/movies";
import axios, { AxiosError } from "axios";

const keyApi: string = import.meta.env.VITE_APP_APIKEY;
const pathApi: string = import.meta.env.VITE_APP_APIPATH;

export const RandomService = {
  async getRandom() {
    const responsePromises = [];
    for (let i = 0; i < 4; i++) {
      const API_URL = `${pathApi}/v2.2/films/${getRandomInRange(100, 10000)}`;
      try {
        const res = await axios.get(API_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": keyApi,
          },
        });
        responsePromises.push(res);
      } catch (err) {
        const error = err as AxiosError<IError>;
        if (typeof error.response?.data.message === "string")
          return error.response?.data.message;
      }
    }

    const promisesArray = (await Promise.allSettled(responsePromises)).map(
      (promis) => {
        if (promis.status === "fulfilled") return promis.value;
      }
    );
    const randomResponse = (await Promise.allSettled(promisesArray)).map(
      (prom) => {
        if (prom.status === "fulfilled") {
          return prom.value;
        } else {
          ("server response error ");
        }
      }
    );
    const data: Array<IMovie> = [];
    randomResponse.map((item) => data.push(item?.data));
    return data;
  },
};
