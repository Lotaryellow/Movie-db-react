import axios from "axios";
const keyApi: string = import.meta.env.VITE_APP_APIKEY;
const pathApi: string = import.meta.env.VITE_APP_APIPATH;

export const SearchService = {
  async getSearch(searchItemName: string) {
    const APISearchURL = `${pathApi}/v2.1/films/search-by-keyword?keyword=${searchItemName}`;
    const data = await axios.get(APISearchURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": `${keyApi}`,
      },
    });
    return data;
  },
};
