export type country = {
  [key: string]: string;
};
export type genre = {
  [key: string]: string;
};

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
