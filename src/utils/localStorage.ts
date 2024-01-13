import {
  IDigitalRelease,
  IPremier,
  IMovie,
  ITop,
  localStorageType,
  localStorageRandomType,
} from "../types/movies";

export const createLocalStorage = (
  objectName: string,
  arr: Array<IPremier> | Array<IDigitalRelease> | Array<ITop> | unknown
): void => {
  const object: localStorageType = {
    saveTime: new Date().toJSON().split("T")[0],
    data: arr,
  };
  return localStorage.setItem(objectName, JSON.stringify(object));
};

export const createLocalStorageRandom = (
  objectName: string,
  arr: Array<IMovie>
): void => {
  const object: localStorageRandomType = {
    saveTime: new Date().toJSON().split("T")[0],
    data: arr,
  };
  return localStorage.setItem(objectName, JSON.stringify(object));
};
