import React, {FC} from 'react';
import {classNames} from "../../../../lib/classNames";
import cls from "./card.module.scss"
import {Text, TextTheme} from "../../../ui/text/Text";
import {Button, ButtonTheme} from "../../../ui/button/Button";

interface CardProps {
	className?: string;
	category: string;
	title: string;
	description: string;
}

const Card: FC<CardProps> = ({ className, category, title, description }: CardProps) => {

	return (
		<div className={classNames(cls.Card, {}, [className])}>
			<Text theme={TextTheme.SECONDARY} text={category} className={cls.category}/>
			<Text theme={TextTheme.TITLES} text={title} className={cls['card-title']}/>
			<Text text={description} className={cls['card-description']}/>
			<div className={cls.actions}>
				<Button theme={ButtonTheme.PRIMARY} className={cls.submitBtn}>Записаться</Button>
				<Button theme={ButtonTheme.OUTLINE}>Подробнее</Button>
			</div>
		</div>
	);
};

export default Card;