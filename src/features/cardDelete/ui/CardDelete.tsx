import { MouseEvent } from "react";

import { cardsActions } from "@/entities/card/model/slices/cardsSlice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { IconUI } from "@/shared/ui/iconUI/IconUI";

import DeleteSVG from "@/shared/assets/icons/delete.svg";
import cls from "classnames";
import styles from "./CardDelete.module.sass";

interface CardDeleteProps {
	id: number;
	className?: string;
}

export const CardDelete = ({ id, className }: CardDeleteProps) => {
	const dispatch = useAppDispatch();

	const handleClickDelete = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		dispatch(cardsActions.deleteCard(id));
	};

	return (
		<IconUI
			Svg={DeleteSVG}
			onClick={handleClickDelete}
			className={cls(styles.btnDelete, className)}
			classNameSVG={cls(styles.iconDelete)}
		/>
	);
};
