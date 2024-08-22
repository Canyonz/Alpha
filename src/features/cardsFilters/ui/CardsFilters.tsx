import { TextUI } from "@/shared/ui/textUI/TextUI";

import styles from "./CardsFilters.module.sass";
import cls from "classnames";
import { ButtonUI } from "@/shared/ui/buttonUI/ButtonUI";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { getFilterIsLike } from "@/entities/card/model/selectors/cardsSelectors";
import { cardsActions } from "@/entities/card/model/slices/cardsSlice";

interface CardsFiltersProps {
	className?: string;
}

export const CardsFilters = ({ className }: CardsFiltersProps) => {
	const filterIsLike = useSelector(getFilterIsLike);
	const dispatch = useAppDispatch();
	const filterText = filterIsLike ? "Показать все карточки" : "Показать только залайканные карточки";

	const handleClickFilteredIsLike = () => {
		dispatch(cardsActions.toggleIsLikeFilter());
	};

	return (
		<div className={cls(styles.cardsFilters, className)}>
			<TextUI text={"Фильтрация"} />
			<ButtonUI onClick={handleClickFilteredIsLike} className={styles.btnFilterLike}>
				{filterText}
			</ButtonUI>
		</div>
	);
};
