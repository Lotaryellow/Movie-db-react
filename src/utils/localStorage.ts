import { IDigitalRelease, IPremier } from "../types/movies";
type aa = {
  saveTime: string;
  data: Array<IPremier> | Array<IDigitalRelease>;
};

export const createLocalStorage = (
  objectName: string,
  arr: Array<IPremier> | Array<IDigitalRelease>
): void => {
  const object: aa = {
    saveTime: new Date().toJSON().split("T")[0],
    data: arr,
  };
  return localStorage.setItem(objectName, JSON.stringify(object));
};
