import { ReactNode } from "react";

import styles from "./ButtonUI.module.sass";
import cls from "classnames";

interface ButtonUIProps {
	children: ReactNode;
	className?: string;
	onClick: () => void;
}

export const ButtonUI = ({ children, className, onClick }: ButtonUIProps) => {
	return (
		<button onClick={onClick} className={cls(styles.buttonUI, className)}>
			{children}
		</button>
	);
};
