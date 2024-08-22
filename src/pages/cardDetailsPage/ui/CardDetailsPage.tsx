import { Link, useParams } from "react-router-dom";

import { CardDetails } from "@/entities/card";
import { getRouteCards } from "@/shared/consts/routes";
import { TextUI } from "@/shared/ui/textUI/TextUI";
import { useFetchCardByIdQuery } from "../model/api/cardDetailsPageApi";

import styles from "./CardDetailsPage.module.sass";

export const CardDetailsPage = () => {
	const { id } = useParams<{ id: string }>();
	const { data, isLoading, isError } = useFetchCardByIdQuery(id ?? "", { skip: !id });

	return (
		<div className={styles.cardDetailsPage}>
			<nav className={styles.nav}>
				<Link to={getRouteCards()} className={styles.link}>
					Вернуться к списку карточек
				</Link>
				<div className={styles.messages}>
					{!id && <TextUI text="Карточка не найдена" variant="h1" />}
					{isLoading && <TextUI text="Загрузка..." variant="h1" />}
					{isError && <TextUI text="Произошла ошибка при загрузке карточки" variant="h1" color="error" />}
				</div>
			</nav>

			<main className={styles.content}>{data && <CardDetails card={data} />}</main>
		</div>
	);
};
