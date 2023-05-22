import { classNames } from '../../../lib/classNames';
import cls from './tag.module.scss';

export enum TagTheme {
	DEFAULT = 'default',
	ONLINE = 'online',
}

interface TagProps {
	className?: string;
	text?: string;
	theme?: TagTheme;
}

export const Tag = (props: TagProps) => {
	const {
		className,
		text,
		theme = TagTheme.DEFAULT,
	} = props;

	return (
		<div className={classNames(cls.Tag, {[cls[theme]]: true}, [className])}>
			{text && <p className={cls.text}>{text}</p>}
		</div>
	);
};
