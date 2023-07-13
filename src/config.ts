import { ICountry } from "./interfaces/country.interface";

const BASE_URL: string = process.env.REACT_APP_API_URL || "";

export const ALL_COUNTRIES: string =
    BASE_URL + "all?fields=name,capital,flags,population,region";

export const searchByCountry = (name: ICountry["name"]): string => BASE_URL + "name/" + name;

export const filterByCode = (codes: string[]): string =>
    `${codes ? BASE_URL + "alpha?codes=" + codes.join(",") : ""}`;
