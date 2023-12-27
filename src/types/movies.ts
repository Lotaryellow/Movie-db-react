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
export interface localStorageRandomType {
  saveTime: string;
  data: Array<IMovie>;
}

export interface IPremier {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string | null;
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
  nameEn: string | null;
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

export interface IMovie {
  kinopoiskId: number;
  kinopoiskHDId: string | null;
  imdbId: string;
  nameRu: string | null;
  nameEn: string | null;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string | null;
  logoUrl: string | null;
  reviewCount: number;
  ratingCount: number | null;
  ratingGoodReview: number | null;
  ratingGoodReviewVoteCount: number | null;
  ratingKinopoisk: number | null;
  ratingKinopoiskVoteCount: number | null;
  ratingImdb: number | null;
  ratingImdbVoteCount: number | null;
  ratingFilmCritics: number | null;
  ratingFilmCriticsVoteCount: number | null;
  ratingAwait: number | null;
  ratingAwaitCount: number | null;
  ratingRfCritics: number | null;
  ratingRfCriticsVoteCount: number | null;
  webUrl: string;
  year: number;
  filmLength: number;
  slogan: string | null;
  description: string | null;
  shortDescription: string | null;
  editorAnnotation: string | null;
  isTicketsAvailable: boolean;
  productionStatus: string | null;
  type: string;
  ratingMpaa: string | null;
  ratingAgeLimits: string | null;
  hasImax: boolean;
  has3D: boolean;
  lastSync: string;
  countries: Array<country>;
  genres: Array<genre>;
  startYear: number | null;
  endYear: number | null;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
}
export interface ISearchingMovie {
  filmId: number;
  nameRu: string;
  nameEn: string | null;
  type: string;
  year: string;
  description: string;
  filmLength: string;
  countries: Array<country>;
  genres: Array<genre>;
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
}

export interface ICast {
  staffId: number;
  nameRu: string;
  nameEn: string;
  description: string | null;
  posterUrl: string;
  professionText: string;
  professionKey: string;
}
export interface IFilms {
  filmId: number;
  nameRu: string | null;
  nameEn: string;
  rating: string;
  general: boolean;
  description: string;
  professionKey: string;
}
export interface iActor {
  personId: number;
  webUrl: string;
  nameRu: string | null;
  nameEn: string;
  sex: string;
  posterUrl: string;
  growth: number;
  birthday: string | null;
  death: string | null;
  age: number;
  birthplace: string | null;
  deathplace: string | null;
  spouses: [
    {
      personId: number;
      name: string;
      divorced: boolean;
      divorcedReason: string;
      sex: string;
      children: number | null;
      webUrl: string;
      relation: string;
    } | null
  ];
  hasAwards: number;
  profession: string;
  facts: string[];
  films: Array<IFilms>;
}
export interface ITop {
  kinopoiskId: number;
  imdbId: string;
  nameRu: string;
  nameEn: string | null;
  nameOriginal: string;
  countries: Array<country>;
  genres: Array<genre>;
  ratingKinopoisk: number | null;
  ratingImdb: number | null;
  year: number;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
}

export interface IData {
  id: number;
  titleRu: string;
  titleEn: string | null;
  titleOriginal: string | null;
  poster: {
    preview: string;
    full: string;
  };
  ratings: {
    kinopoisk: number | null;
    imdb: number | null;
  };
  year: number;
  filmLength: number;
  slogan: string | null;
  description: string | null;
  countries: Array<country>;
  genres: Array<genre>;
}
