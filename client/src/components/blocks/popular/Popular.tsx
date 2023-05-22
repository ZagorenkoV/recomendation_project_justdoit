import React, {FC} from "react";
import cls from "./popular.module.scss";
import {Text} from "../../ui/text/Text";
import {classNames} from "../../../lib/classNames";
import Cards from "../../common/cards/Cards";
import {popularEvents} from "../../../mock/popularEvents";

interface PopularProps {
	className?: string;
}

const Popular: FC = ({ className }: PopularProps) => {

	return (
		<div className={classNames(cls.Popular, {}, [className])}>
			<Text title={'Популярные занятия'}/>
			<Cards data={popularEvents}/>
		</div>
	);
};

export default Popular;