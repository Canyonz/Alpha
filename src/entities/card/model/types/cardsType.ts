export interface Card {
	id: string;
	title: string;
	url: string;
	isLike: boolean;
}

export interface CardsSchema {
	data: Card[];
	isLike: boolean;
	isLoading: boolean;
	isError: boolean;
}
