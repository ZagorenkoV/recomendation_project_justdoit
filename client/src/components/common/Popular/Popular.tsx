import React, {FC} from "react";
import cls from "./popular.module.scss";
import {Text} from "../../ui/text/Text";
import {classNames} from "../../../lib/classNames";
import Card from "../card/Card";

interface PopularProps {
	className?: string;
}

const Popular: FC = ({ className }: PopularProps) => {
	
	const mockData = [
		{
			category: 'Категория 1',
			title: 'Заголовок 1',
			description: 'Описание 1 Описание 1 Описание 1Описание 1Описание 1 Описание 1'
		},
		{
			category: 'Категория 2',
			title: 'Заголовок 2',
			description: 'Описание 2 Описание 2 Описание 2Описание 2Описание 2 Описание 2'
		},
		{
			category: 'Категория 3',
			title: 'Заголовок 3',
			description: 'Описание 3 Описание 3 Описание 3Описание 3Описание 3 Описание 3'
		},
		{
			category: 'Категория 4',
			title: 'Заголовок 4',
			description: 'Описание 4 Описание 4 Описание 4Описание 4Описание 4 Описание 4'
		}
		]

	return (
		<div className={classNames(cls.Popular, {}, [className])}>
			<Text title={'Популярные занятия'}/>
			<div className={cls['card-row']}>
				{mockData.map((card, i) => (
					<Card key={i} category={card.category} title={card.title} description={card.description}/>
				))}
			</div>

		</div>
	);
};

export default Popular;