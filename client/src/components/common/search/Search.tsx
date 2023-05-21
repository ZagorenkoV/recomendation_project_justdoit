import React, {FC} from 'react';
import cls from "./search.module.scss";
import {Input} from "../../ui/input/Input";
import {Button, ButtonTheme} from "../../ui/button/Button";
import {Text} from "../../ui/text/Text";

const Search: FC = () => {

    return (
        <div className={cls.SearchBar}>
			<Text title={'Поиск занятий'}/>
			<div className={cls.search}>
				<Input className={cls.input} placeholder={'Введите название или номер группы'}/>
				<Button theme={ButtonTheme.PRIMARY} className={cls.searchBtn}>Поиск</Button>
			</div>

        </div>
    );
};

export default Search;