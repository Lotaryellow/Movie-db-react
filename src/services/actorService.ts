import { IActor } from "../types/movies";
import axios from "axios";

const keyApi: string = import.meta.env.VITE_APP_APIKEY;
const pathApi: string = import.meta.env.VITE_APP_APIPATH;

export const ActorService = {
  async getActor(id: string) {
    const APIActorURL = `${pathApi}/v1/staff/${id}`;
    const { data } = await axios.get<IActor>(APIActorURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": `${keyApi}`,
      },
    });
    return data;
  },
};
