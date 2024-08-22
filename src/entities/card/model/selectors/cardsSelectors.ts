import { RootStateType } from "@/app/providers/store/config/storeConfig";

export const getCards = (state: RootStateType) => state.cards.data;
export const getFilterIsLike = (state: RootStateType) => state.cards.isLike;
