import React, {FC} from 'react';
import cls from "./cards.module.scss";
import {classNames} from "../../../lib/classNames";
import {Card} from "./card/Card";

interface DataProps {
	category: string,
	title: string,
	description: string
}

interface CardsProps {
	className?: string;
	data: DataProps[];
}

const Cards: FC<CardsProps> = ({className, data}: CardsProps) => {

	return (
		<div className={classNames(cls.Cards, {}, [className])}>
			<div className={cls['card-row']}>
				{data.map((card, i) => (
					<Card key={i} category={card.category} title={card.title} description={card.description}/>
				))}
			</div>
		</div>
	);
};

export default Cards;