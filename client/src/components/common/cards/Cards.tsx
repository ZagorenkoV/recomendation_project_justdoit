import React, {FC} from 'react';
import cls from "./cards.module.scss";
import {classNames} from "../../../lib/classNames";
import {Card} from "./card/Card";
import {DataType} from "../../../redux/types/types";

interface CardsProps {
	className?: string;
	data: DataType[];
}

const Cards: FC<CardsProps> = ({className, data}: CardsProps) => {

	return (
		<div className={classNames(cls.Cards, {}, [className])}>
			<div className={cls['cards-row']}>
				{data.map((card, i) => (
					<Card key={i} category={card.level_1} title={card.level_3} description={card.Description}
						  address={card.Adress}/>
				))}
			</div>
		</div>
	);
};

export default Cards;