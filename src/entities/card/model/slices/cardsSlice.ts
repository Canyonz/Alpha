import { Card } from "@/entities/card";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardsSchema } from "../types/cardsType";

const initialState: CardsSchema = {
	data: [],
	isLike: false,
};

const cardsSlice = createSlice({
	name: "cardsSlice",
	initialState,
	reducers: {
		setCards: (state, action: PayloadAction<Card[]>) => {
			state.data = action.payload.map((card) => ({ ...card, isLike: false }));
		},
		toggleLike: (state, action: PayloadAction<number>) => {
			state.data = state.data.map((card) => (card.id === action.payload ? { ...card, isLike: !card.isLike } : card));
		},
		deleteCard: (state, action: PayloadAction<number>) => {
			state.data = state.data.filter((card) => card.id !== action.payload);
		},
		toggleIsLikeFilter: (state) => {
			state.isLike = !state.isLike;
		},
	},
});

export const { actions: cardsActions, reducer: cardsReducer } = cardsSlice;
