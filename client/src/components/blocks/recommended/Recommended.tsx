import React, {FC} from "react";
import cls from "./recommended.module.scss";
import {Text} from "../../ui/text/Text";
import {classNames} from "../../../lib/classNames";
import Cards from "../../common/cards/Cards";
import {Button, ButtonSize, ButtonTheme} from "../../ui/button/Button";

interface PopularProps {
	className?: string;
}

const Recommended: FC = ({ className }: PopularProps) => {

	const recommendedEvents = [
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
		},
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
		<div className={classNames(cls.Recommended, {}, [className])}>
			
			<div>
				<Text title={'Подобрать индивидуальные занятия'}/>
				<Text text={'Пройдите наш опрос и узнайте, какие направления подходят именно Вам'}/>
				<Button theme={ButtonTheme.PRIMARY} size={ButtonSize.L} className={cls['recommend-btn']}>Подобрать занятия</Button>
			</div>
			
			<Text title={'Рекомендованные занятия'}/>
			<Cards data={recommendedEvents}/>
		</div>
	);
};

export default Recommended;