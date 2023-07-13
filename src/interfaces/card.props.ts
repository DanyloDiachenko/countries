interface IInfo {
	title: string;
	description: string;
};

export interface CardProps {
	img: string;
	name: string;
	info: IInfo[];
};