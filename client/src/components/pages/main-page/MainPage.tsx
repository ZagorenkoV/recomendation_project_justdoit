import React, {FC} from 'react';
import {Search} from "../../blocks/search/Search";
import {Popular} from "../../blocks/popular/Popular";
import {Recommended} from "../../blocks/recommended/Recommended";
import Block from "../../common/block/Block";

const MainPage: FC = () => {
	return (
		<>
			<Block title='Поиск занятий'>
				<Search/>
			</Block>

			<Block title='Популярные занятия'>
				<Popular/>
			</Block>

			<Block title='Подобрать индивидуальные занятия'>
				<Recommended/>
			</Block>
		</>
	);
};

export default MainPage;