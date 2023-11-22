export type country = {
  [key: string]: string;
};
export type genre = {
  [key: string]: string;
};

export interface localStorageType {
  saveTime: string;
  data: Array<IPremier> | Array<IDigitalRelease>;
}

export interface IPremier {
  kinopoiskId: number;
  nameRu: string;
  nameEng: string | null;
  year: number;
  posterUrl: string;
  posterUrlPreview: string;
  countries: Array<country>;
  genres: Array<genre>;
  duration: number;
  premierRu: string;
}
export interface IDigitalRelease {
  filmId: number;
  nameRu: string;
  nameEng: string | null;
  year: number;
  posterUrl: string;
  posterUrlPreview: string;
  countries: Array<country>;
  genres: Array<genre>;
  rating: number | null;
  ratingVoteCount: number | null;
  expectationsRating: number | null;
  expectationsRatingVoteCount: number | null;
  duration: number;
  releaseDate: string;
}
