import styles from "./TextUI.module.sass";
import cls from "classnames";

type TextVariant = "h1" | "p";
type TextColor = "primary" | "error";
type TextAlign = "left" | "center" | "right";

interface TextUIProps {
	text: string;
	variant?: TextVariant;
	color?: TextColor;
	align?: TextAlign;
	className?: string;
}

export const TextUI = ({ text, variant = "p", color = "primary", align = "left", className }: TextUIProps) => {
	const TextTag = variant;

	return <TextTag className={cls(styles.textUI, styles[variant], styles[color], styles[align], className)}>{text}</TextTag>;
};
