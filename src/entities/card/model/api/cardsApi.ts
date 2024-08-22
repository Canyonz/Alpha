import { Card } from "@/entities/card";
import { rtkApi } from "@/shared/api/rtkApi";

const cardsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		fetchCards: build.query<Card[], void>({
			query: () => ({
				url: "/photos?_limit=15",
			}),
		}),
	}),
});

export const { useFetchCardsQuery } = cardsApi;
