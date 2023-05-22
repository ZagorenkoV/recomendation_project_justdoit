import { classNames } from '../../../lib/classNames';
import cls from './text.module.scss';

export enum TextTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	TITLES = 'titles',
	ERROR = 'error',
}

interface TextProps {
	className?: string;
	title?: string;
	text?: string;
	theme?: TextTheme;
}

export const Text = (props: TextProps) => {
	const {
		className,
		text,
		title,
		theme = TextTheme.PRIMARY,
	} = props;

	return (
		<div className={classNames(cls.Text, {[cls[theme]]: true}, [className])}>
			{title && <p className={cls.title}>{title}</p>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	);
};
