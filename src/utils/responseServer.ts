import {
  IData,
  IDigitalRelease,
  IMovie,
  IPremier,
  ITop,
} from "../types/movies";

const responseServer = (
  item: IDigitalRelease | IPremier | IMovie | ITop
): IData => {
  let ratingKinopoiskElem;
  if ("ratingKinopoisk" in item) {
    ratingKinopoiskElem = item?.ratingKinopoisk;
  } else ratingKinopoiskElem = null;

  let ratingImdbElem;
  if ("ratingImdb" in item) {
    ratingImdbElem = item?.ratingImdb;
  } else ratingImdbElem = null;

  const dataResp: IData = {
    id: Number(""),
    titleRu: "",
    titleEn: "",
    titleOriginal: "",
    poster: {
      preview: "",
      full: "",
    },
    ratings: {
      kinopoisk: ratingKinopoiskElem,
      imdb: ratingImdbElem,
    },
    year: item?.year,
    filmLength: Number(""),
    slogan: "",
    description: "",
    countries: item?.countries,
    genres: item?.genres,
  };

  if ("filmId" in item) {
    dataResp.id = item?.filmId;
  } else dataResp.id = item?.kinopoiskId;
  if (typeof item.nameRu === "string") {
    if ("nameRu" in item) {
      dataResp.titleRu = item?.nameRu;
    }
  }
  if (typeof item.nameEn === "string") {
    if ("nameEn" in item) {
      dataResp.titleEn = item?.nameEn;
    }
  }
  if ("nameOriginal" in item) {
    dataResp.titleOriginal = item?.nameOriginal;
  }
  if (typeof item.posterUrlPreview === "string") {
    dataResp.poster.preview = item?.posterUrlPreview;
  }
  if (typeof item.posterUrl === "string") {
    dataResp.poster.full = item?.posterUrl;
  }
  if ("filmLength" in item) {
    dataResp.filmLength = item?.filmLength;
  }
  if ("slogan" in item) {
    dataResp.slogan = item?.slogan;
  }
  if ("description" in item) {
    dataResp.description = item?.description;
  }
  return dataResp;
};
export default responseServer;
