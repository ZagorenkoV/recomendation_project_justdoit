import React, {FC} from 'react';
import cls from "./search.module.scss"
import {Input} from "../../ui/input/Input";
import {Button, ButtonTheme} from "../../ui/button/Button";
import {Text} from "../../ui/text/Text";
import {classNames} from "../../../lib/classNames";

interface SearchProps {
	className?: string;
}

export const Search: FC = ({className}: SearchProps) => {

	return (
		<div className={classNames(cls.Search, {}, [className])}>
			<Text title={'Поиск занятий'}/>
			<div className={cls['search-bar']}>
				<Input className={cls.input} placeholder={'Введите название или номер группы'}/>
				<Button theme={ButtonTheme.PRIMARY} className={cls.searchBtn}>Поиск</Button>
			</div>
		</div>
	);
};