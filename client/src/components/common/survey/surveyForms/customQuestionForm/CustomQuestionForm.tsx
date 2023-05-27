import React, {useCallback, useContext} from 'react';
import cls from "../../surveyModal/surveyModal.module.scss";
import {Text, TextTheme} from "../../../../ui/text/Text";
import {Button, ButtonTheme} from "../../../../ui/button/Button";
import {appContext} from "../../../../../context/context";
import {IAnswerOptions} from "../../../../../mock/questions";

interface CustomQuestionFormProps {
	description?: string;
	data?: any;
}

export const CustomQuestionForm = ({description, data}: CustomQuestionFormProps) => {

	const {
		filter,
		setFilter,
		activeStage,
		resultStage2,
		resultStage2_2,
		resultStage2_3,
		setResultStage2,
		setResultStage2_1,
		setResultStage2_2,
		setResultStage2_2_2,
		setResultStage2_3,
		setResultStage2_3_1,
		setResultStage2_4,
	} = useContext(appContext)


	const onFilterSelect = useCallback((filter: string) => {
		setFilter(filter);
		if (activeStage === 2 && filter !== '') {
			setResultStage2(filter)
		}
		if (activeStage === 3 && resultStage2 === '2_1' && filter !== '') {
			setResultStage2_1(filter)
			setResultStage2_2('')
			setResultStage2_3('')
			setResultStage2_4('')
		}
		if (activeStage === 3 && resultStage2 === '2_2' && filter !== '') {
			setResultStage2_2(filter)
			setResultStage2_1('')
			setResultStage2_3('')
			setResultStage2_4('')
		}
		if (activeStage === 3 && resultStage2 === '2_3' && filter !== '') {
			setResultStage2_3(filter)
			setResultStage2_1('')
			setResultStage2_2('')
			setResultStage2_4('')
		}
		if (activeStage === 3 && resultStage2 === '2_4' && filter !== '') {
			setResultStage2_4(filter)
			setResultStage2_1('')
			setResultStage2_2('')
			setResultStage2_3('')
		}
		if (activeStage === 4 && resultStage2_2 === '2_2_2' && filter !== '') {
			setResultStage2_2_2(filter)
			setResultStage2_3_1('')
		}
		if (activeStage === 4 && resultStage2_3 === '2_3_1' && filter !== '') {
			setResultStage2_3_1(filter)
			setResultStage2_2_2('')
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
				text={'Выберите направление активности'}
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