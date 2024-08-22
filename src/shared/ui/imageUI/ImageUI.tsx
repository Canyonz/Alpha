import styles from "./ImageUI.module.sass";
import cls from "classnames";

interface ImageUIProps {
	src: string;
	className?: string;
}

export const ImageUI = ({ src, className }: ImageUIProps) => {
	return <img src={src} className={cls(styles.imageUI, className)} />;
};
