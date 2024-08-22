import { Card } from "@/entities/card";
import { rtkApi } from "@/shared/api/rtkApi";

const cardDetailsPageApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		fetchCardById: build.query<Card, string>({
			query: (id) => ({
				url: `/photos/${id}`,
			}),
		}),
	}),
});

export const { useFetchCardByIdQuery } = cardDetailsPageApi;
