import { classNames } from '../../../lib/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './button.module.scss';

export enum ButtonTheme {
	PRIMARY = 'primary',
	OUTLINE = 'outline',
}

export enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
	className?: string;
	theme?: ButtonTheme | undefined;
	size?: ButtonSize;
	disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme,
		disabled,
		size = ButtonSize.M,
		...otherProps
	} = props;

	const mods: Record<string, boolean | undefined> = {
		[cls[theme!]]: true,
		[cls[size]]: true,
		[cls.disabled]: disabled,
	};

	return (
		<button
			type="button"
			className={classNames(cls.Button, mods, [className])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	);
};
