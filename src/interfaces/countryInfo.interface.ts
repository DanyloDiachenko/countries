interface ICurrency {
	code: string;
	name: string;
	symbol: string;
};

interface IFlag {
	svg: string;
	png: string;
};

interface ILanguage {
	iso639_1: string;
	iso639_2: string;
	name: string;
	nativeName: string;
};

interface IRegionalBlock {
	acronym: string;
	name: string;
};

export interface ICountryInfo {
	alpha2Code: string;
	alpha3Code: string;
	altSpellings: string[];
	area: number;
	borders: string[];
	callingCodes: string;
	capital: string;
	cioc: string;
	currencies: ICurrency[];
	demonym: string;
	flag: string;
	flags: IFlag[];
	gini: number;
	independent: boolean;
	languages: ILanguage[];
	ILatLng: number[];
	name: string;
	nativeName: string;
	numericCode: string;
	population: number;
	region: string;
	regionalBlocs: IRegionalBlock[];
	subregion: string;
	timezones: string[];
	topLevelDomain: string[];
	translations: {
		br: string;
		de: string;
		es: string;
		fa: string;
		fr: string;
		hr: string;
		hu: string;
		it: string;
		ja: string;
		nl: string;
		pt: string;
	};
};