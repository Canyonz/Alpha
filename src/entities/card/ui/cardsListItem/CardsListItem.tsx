import { ReactElement } from "react";
import { Link } from "react-router-dom";

import { getRouteCard } from "@/shared/consts/routes";
import { ImageUI } from "@/shared/ui/imageUI/ImageUI";
import { TextUI } from "@/shared/ui/textUI/TextUI";
import { Card } from "../../model/types/cardsType";

import cls from "classnames";
import styles from "./CardsListItem.module.sass";

interface CardsListItemProps {
	card: Card;
	btns: ReactElement;
	className?: string;
}

export const CardsListItem = ({ card, btns, className }: CardsListItemProps) => {
	return (
		<Link to={getRouteCard(card.id)} className={cls(styles.cardListItem, className)}>
			<ImageUI src={card.url} className={styles.img} />
			<div className={styles.content}>
				<TextUI text={card.title} className={styles.title} />
				<div className={styles.btns}>{btns}</div>
			</div>
		</Link>
	);
};
