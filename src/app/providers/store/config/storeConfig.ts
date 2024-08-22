import { cardsReducer } from "@/entities/card/model/slices/cardsSlice";
import { rtkApi } from "@/shared/api/rtkApi";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({
	cards: cardsReducer,
	[rtkApi.reducerPath]: rtkApi.reducer,
});

export const storeConfig = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkApi.middleware),
});

export type RootStateType = ReturnType<typeof storeConfig.getState>;
export type AppDispatchType = typeof storeConfig.dispatch;
