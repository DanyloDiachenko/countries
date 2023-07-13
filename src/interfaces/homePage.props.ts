import { ICountry } from './country.interface';

export interface HomePageProps {
	setCountries: (countries: ICountry[]) => void;
	countries: ICountry[];
};