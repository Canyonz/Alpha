import { Card, CardsListItem } from "@/entities/card";
import { CardDelete } from "@/features/cardDelete";
import { CardToggleLike } from "@/features/cardToggleLike";

import cls from "classnames";
import styles from "./CardsList.module.sass";

interface CardsListProps {
	cards: Card[];
	className?: string;
}

export const CardsList = ({ cards, className }: CardsListProps) => {
	return (
		<div className={cls(styles.cardsList, className)}>
			{cards.map((card) => (
				<CardsListItem
					key={card.id}
					card={card}
					btns={
						<>
							<CardToggleLike id={card.id} isLike={card.isLike} />
							<CardDelete id={card.id} />
						</>
					}
				/>
			))}
		</div>
	);
};
