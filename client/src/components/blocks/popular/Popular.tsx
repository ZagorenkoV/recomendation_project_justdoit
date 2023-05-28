import React, {FC, useContext} from "react";
import cls from "./popular.module.scss";
import {Text} from "../../ui/text/Text";
import {classNames} from "../../../lib/classNames";
import Cards from "../../common/cards/Cards";
import {appContext} from "../../../context/context";
import {popularEvents} from "../../../mock/popularEvents";

interface PopularProps {
	className?: string;
}

export const Popular: FC = ({className}: PopularProps) => {

	const {popular} = useContext(appContext)

	return (
		<div className={classNames(cls.Popular, {}, [className])}>
			<Text title={'Популярные занятия'}/>
			<Cards data={popularEvents}/>
		</div>
	);
};