import { IDigitalRelease, IPremier } from "../types/movies";
import { localStorageType } from "../types/movies";

export const createLocalStorage = (
  objectName: string,
  arr: Array<IPremier> | Array<IDigitalRelease>
): void => {
  const object: localStorageType = {
    saveTime: new Date().toJSON().split("T")[0],
    data: arr,
  };
  return localStorage.setItem(objectName, JSON.stringify(object));
};
