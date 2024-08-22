import { cardsActions } from "@/entities/card/model/slices/cardsSlice";
import LikeSVG from "@/shared/assets/icons/like.svg";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { IconUI } from "@/shared/ui/iconUI/IconUI";
import cls from "classnames";
import { MouseEvent } from "react";
import styles from "./CardToggleLike.module.sass";

interface CardToggleLikeProps {
	id: number;
	isLike: boolean;
	className?: string;
}

export const CardToggleLike = ({ id, isLike, className }: CardToggleLikeProps) => {
	const dispatch = useAppDispatch();

	const handleClickLike = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		dispatch(cardsActions.toggleLike(id));
	};

	return (
		<IconUI
			Svg={LikeSVG}
			onClick={handleClickLike}
			className={cls(styles.btnLike, className)}
			classNameSVG={cls(styles.iconLike, { [styles.isLike]: isLike })}
		/>
	);
};
