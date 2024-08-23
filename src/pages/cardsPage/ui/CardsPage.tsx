import { CardsList } from "@/pages/cardsPage/ui/cardsList/CardsList";
import { TextUI } from "@/shared/ui/textUI/TextUI";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getCards, getFilterIsLike, getIsError, getIsLoading } from "@/entities/card/model/selectors/cardsSelectors";
import styles from "./CardsPage.module.sass";
import { CardsFilters } from "@/features/cardsFilters";

export const CardsPage = () => {
	const filterIsLike = useSelector(getFilterIsLike);
	const cards = useSelector(getCards);
	const isLoading = useSelector(getIsLoading);
	const isError = useSelector(getIsError);

	const filteredCards = useMemo(() => {
		return filterIsLike ? cards.filter((card) => card.isLike) : cards;
	}, [cards, filterIsLike]);

	return (
		<main className={styles.cardsPage}>
			<TextUI text="Список карточек" variant="h1" align="center" />
			<CardsFilters />
			{isLoading && <TextUI text="Загрузка..." variant="h1" />}
			{isError && <TextUI text={"Ошибка при загрузке данных"} variant="h1" color="error" />}
			{!isError &&
				!isLoading &&
				(filteredCards.length ? <CardsList cards={filteredCards} /> : <TextUI text="Список карточек пуст" variant="h1" />)}
		</main>
	);
};
