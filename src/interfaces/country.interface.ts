export interface ICountry {
	capital: string;
	flags: {
		png: string;
		svg: string;
	};
	independent: boolean;
	name: string;
	population: number;
	region: string;
};