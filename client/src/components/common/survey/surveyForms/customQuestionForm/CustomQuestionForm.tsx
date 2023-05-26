import React, {useContext, useEffect, useState} from 'react';
import cls from "../../surveyModal/surveyModal.module.scss";
import {Text, TextTheme} from "../../../../ui/text/Text";
import {Button, ButtonTheme} from "../../../../ui/button/Button";
import {appContext} from "../../../../../context/context";
import {IAnswerOptions} from "../../../../../mock/questions";

interface CustomQuestionFormProps {
	title?: string;
	description?: string;
	data?: any;
}

export const CustomQuestionForm = ({title, description, data}: CustomQuestionFormProps) => {

	const {activeStage, resultStage2, setResultStage2, resultStage3, setResultStage3} = useContext(appContext)
	const [filter, setFilter] = useState('')

	const onFilterSelect = (filter: string) => {
		setFilter(filter);
	}

	useEffect(() => {
		console.log(resultStage2)
	}, [resultStage2])

	useEffect(() => {
		console.log(resultStage3)
	}, [resultStage3])

	useEffect(() => {
		if (activeStage === 2 && filter !== '') {
			setResultStage2(filter)
		}
		if (activeStage === 3 && filter !== '') {
			setResultStage3(filter)
		}
	}, [filter])

	const answers = data.answerOptions.map((item: IAnswerOptions, index: number) => {
		const active = filter === item.value;
		return (
			<Button
				theme={active ? ButtonTheme.PRIMARY : ButtonTheme.OUTLINE}
				className={cls.answerBtn}
				key={index}
				onClick={() => onFilterSelect(item.value)}
			>
				{item.answerText}
			</Button>
		)
	})

	return (
		<>
			<Text
				theme={TextTheme.TITLES}
				text={title}
				className={cls['survey-title']}
			/>
			<Text
				text={description}
				className={cls['survey-description']}
			/>

			<div className={cls["answers-section"]}>
				{answers}
			</div>
		</>
	);
};