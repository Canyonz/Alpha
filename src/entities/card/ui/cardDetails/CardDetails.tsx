import { ImageUI } from "@/shared/ui/imageUI/ImageUI";
import { Card } from "../../model/types/cardsType";

import styles from "./CardDetails.module.sass";
import cls from "classnames";
import { TextUI } from "@/shared/ui/textUI/TextUI";

interface CardDetailsProps {
	card: Card;
	className?: string;
}

export const CardDetails = ({ card, className }: CardDetailsProps) => {
	return (
		<div className={cls(styles.cardDetails, className)}>
			<ImageUI src={card.url} className={styles.img} />
			<div className={styles.content}>
				<TextUI text={card.title} className={styles.title} />
			</div>
		</div>
	);
};
