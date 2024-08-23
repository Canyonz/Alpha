import { ImgHTMLAttributes, ReactElement, useLayoutEffect, useState } from "react";
import styles from "./ImageUI.module.sass";
import cls from "classnames";

interface ImageUIProps extends ImgHTMLAttributes<HTMLImageElement> {
	fallback?: ReactElement;
	errorFallback?: ReactElement;
	className?: string;
}

export const ImageUI = ({ src, alt = "image", className, fallback, errorFallback = fallback, ...rest }: ImageUIProps) => {
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	useLayoutEffect(() => {
		const img = new Image();
		img.src = src ?? "";

		img.onload = () => {
			setIsLoading(false);
		};

		img.onerror = () => {
			setIsLoading(false);
			setHasError(true);
		};
	}, [src]);

	if (isLoading && fallback) {
		return fallback;
	}

	if (hasError && errorFallback) {
		return errorFallback;
	}

	return <img src={src} alt={alt} className={cls(styles.imageUI, className)} {...rest} />;
};
