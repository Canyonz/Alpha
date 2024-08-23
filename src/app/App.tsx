import { useFetchCardsQuery } from "@/entities/card/model/api/cardsApi";
import { AppRouter } from "./providers/router";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useEffect } from "react";
import { cardsActions } from "@/entities/card/model/slices/cardsSlice";

function App() {
	const { data, isLoading, isError } = useFetchCardsQuery();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (data) dispatch(cardsActions.setCards(data));
		dispatch(cardsActions.setIsLoading(isLoading));
		dispatch(cardsActions.setIsError(isError));
	}, [data, dispatch, isError, isLoading]);

	return (
		<div className="app">
			<AppRouter />
		</div>
	);
}

export default App;
