import axios from "axios";

const keyApi: string = import.meta.env.VITE_APP_APIKEY;
const pathApi: string = import.meta.env.VITE_APP_APIPATH;

export const FilmInfoService = {
  async getInfo(id: string) {
    const APIInfoURL = `${pathApi}/v2.2/films/${id}`;

    const data = await axios.get(APIInfoURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": `${keyApi}`,
      },
    });
    return data;
  },
};
