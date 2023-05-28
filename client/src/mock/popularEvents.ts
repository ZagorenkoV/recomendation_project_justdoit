export interface IPopularEvents {
	id: string;
	category: string;
	title: string;
	description: string;
	address: string;
}

export const popularEvents: IPopularEvents[] = [
	{
		id: "1",
		category: 'Категория 1',
		title: 'Заголовок 1',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
		address: 'город Москва, Люблинская улица, дом 125А, строение 1'
	},
	{
		id: "2",
		category: 'Категория 2',
		title: 'Заголовок 2',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
		address: 'город Москва, Люблинская улица, дом 125А, строение 1'
	},
	{
		id: "3",
		category: 'Категория 3',
		title: 'Заголовок 3',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
		address: 'город Москва, Люблинская улица, дом 125А, строение 1'
	},
	{
		id: "4",
		category: 'Категория 4',
		title: 'Заголовок 4',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
		address: 'город Москва, Люблинская улица, дом 125А, строение 1'
	},
]