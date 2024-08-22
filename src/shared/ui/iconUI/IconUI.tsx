import { MouseEvent } from "react";
import styles from "./IconUI.module.sass";
import cls from "classnames";

type IconSise = "md";
type SVGType = Omit<React.SVGProps<SVGSVGElement>, "onClick">;

interface IconUIProps extends SVGType {
	Svg: React.FC<React.SVGProps<SVGSVGElement>>;
	size?: IconSise;
	className?: string;
	classNameSVG?: string;
	onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const IconUI = ({ Svg, size = "md", className, classNameSVG, onClick, ...rest }: IconUIProps) => {
	const icon = <Svg className={cls(styles.iconUI, styles[size], classNameSVG)} {...rest} />;

	if (onClick) {
		return (
			<button onClick={onClick} className={cls(styles.button, className)}>
				{icon}
			</button>
		);
	}

	return icon;
};
