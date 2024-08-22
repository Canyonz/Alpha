import { CardsList } from "@/pages/cardsPage/ui/cardsList/CardsList";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { TextUI } from "@/shared/ui/textUI/TextUI";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useFetchCardsQuery } from "@/entities/card/model/api/cardsApi";
import { getCards, getFilterIsLike } from "@/entities/card/model/selectors/cardsSelectors";
import { cardsActions } from "@/entities/card/model/slices/cardsSlice";
import styles from "./CardsPage.module.sass";
import { CardsFilters } from "@/features/cardsFilters";

export const CardsPage = () => {
	const { data, isLoading, isError } = useFetchCardsQuery();
	const filterIsLike = useSelector(getFilterIsLike);
	const cards = useSelector(getCards);
	const dispatch = useAppDispatch();

	const filteredCards = useMemo(() => {
		return filterIsLike ? cards.filter((card) => card.isLike) : cards;
	}, [cards, filterIsLike]);

	useEffect(() => {
		if (!data) return;

		dispatch(cardsActions.setCards(data));
	}, [data, dispatch]);

	return (
		<main className={styles.cardsPage}>
			<TextUI text="Список карточек" variant="h1" align="center" />
			<CardsFilters />
			{isLoading && <TextUI text="Загрузка..." variant="h1" />}
			{isError && <TextUI text={"Ошибка при загрузке данных"} variant="h1" color="error" />}
			<CardsList cards={filteredCards} />
		</main>
	);
};
