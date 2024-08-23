import { Card } from "@/entities/card";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardsSchema } from "../types/cardsType";

const initialState: CardsSchema = {
	data: [],
	isLike: false,
	isLoading: false,
	isError: false,
};

const cardsSlice = createSlice({
	name: "cardsSlice",
	initialState,
	reducers: {
		setCards: (state, action: PayloadAction<Card[]>) => {
			state.data = action.payload.map((card) => ({ ...card, isLike: false }));
		},
		setIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setIsError: (state, action: PayloadAction<boolean>) => {
			state.isError = action.payload;
		},
		toggleLike: (state, action: PayloadAction<string>) => {
			state.data = state.data.map((card) => (card.id === action.payload ? { ...card, isLike: !card.isLike } : card));
		},
		deleteCard: (state, action: PayloadAction<string>) => {
			state.data = state.data.filter((card) => card.id !== action.payload);
		},
		toggleIsLikeFilter: (state) => {
			state.isLike = !state.isLike;
		},
	},
});

export const { actions: cardsActions, reducer: cardsReducer } = cardsSlice;
