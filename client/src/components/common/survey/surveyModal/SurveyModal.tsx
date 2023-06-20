import {classNames} from "../../../../lib/classNames";
import {Modal} from "../../../ui/modal/Modal";
import cls from "./surveyModal.module.scss";
import {Button, ButtonTheme} from "../../../ui/button/Button";
import React, {useContext} from "react";
import {Text, TextTheme} from "../../../ui/text/Text";
import {appContext} from "../../../../context/context";
import {UserDataForm} from "../surveyForms/userDataForm/UserDataForm";
import {CustomQuestionForm} from "../surveyForms/customQuestionForm/CustomQuestionForm";
import {
	dataStage2,
	dataStage2_1,
	dataStage2_1_1,
	dataStage2_1_2,
	dataStage2_1_3,
	dataStage2_1_4,
	dataStage2_2,
	dataStage2_2_1,
	dataStage2_2_2, dataStage2_2_2_1, dataStage2_2_2_2, dataStage2_2_2_3, dataStage2_2_2_4, dataStage2_2_2_5,
	dataStage2_2_3,
	dataStage2_2_4,
	dataStage2_2_5,
	dataStage2_3,
	dataStage2_3_1, dataStage2_3_1_1, dataStage2_3_1_2, dataStage2_3_1_3, dataStage2_3_1_4,
	dataStage2_3_2,
	dataStage2_3_3,
	dataStage2_3_4,
	dataStage2_4,
	dataStage2_4_1,
	dataStage2_4_2, dataStage2_4_3
} from "../../../../mock/questions";
import {useAppDispatch} from "../../../../redux/hooks";
import {fetchDate, fetchSurvey} from "../../../../redux/slices/data/recommendedSlice";

interface SurveyModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const SurveyModal = ({className, isOpen, onClose}: SurveyModalProps) => {
	const {
		filter,
		activeStage,
		lastStage,
		userData,
		setActiveStage,
		resultStage2,
		resultStage2_1,
		resultStage2_2,
		resultStage2_2_2,
		resultStage2_3,
		resultStage2_3_1,
		resultStage2_4,
	} = useContext(appContext)

	const dispatch = useAppDispatch();

	const handleNextStage = () => {
		if (activeStage === 1 && userData.birthDate !== '') {
			dispatch(fetchDate(userData.birthDate))
			// console.log(`Отправка данных на бэк: ${[JSON.stringify(userData)]}`)
		}

		if (activeStage < lastStage) {
			setActiveStage(activeStage + 1)
		}
	}

	const handleBackStage = () => {
		setActiveStage(activeStage - 1)
	}

	const onSubmit = () => {
		const finalResult = {
			result: filter
		}
		dispatch(fetchSurvey(finalResult.result))
		// console.log(`Отправка данных на бэк: ${JSON.stringify(finalResult)}`)
		onClose();
	}

	return (
		<Modal
			className={classNames(cls.SurveyModal, {}, [className])}
			isOpen={isOpen}
			onClose={onClose}
			small={true}
		>
			<div className={cls['modal-content']}>
				<Text
					theme={TextTheme.SECONDARY}
					text={`Шаг ${activeStage}`}
					className={cls.category}
				/>
				{activeStage === 1 &&
					<UserDataForm/>
				}
				{activeStage === 2 &&
					<CustomQuestionForm data={dataStage2}/>
				}
				{activeStage === 3 && resultStage2 === '2_1' &&
					<CustomQuestionForm data={dataStage2_1}/>
				}
				{activeStage === 4 && resultStage2_1 === '2_1_1' &&
					<CustomQuestionForm data={dataStage2_1_1}/>
				}
				{activeStage === 4 && resultStage2_1 === '2_1_2' &&
					<CustomQuestionForm data={dataStage2_1_2}/>
				}
				{activeStage === 4 && resultStage2_1 === '2_1_3' &&
					<CustomQuestionForm data={dataStage2_1_3}/>
				}
				{activeStage === 4 && resultStage2_1 === '2_1_4' &&
					<CustomQuestionForm data={dataStage2_1_4}/>
				}
				{activeStage === 3 && resultStage2 === '2_2' &&
					<CustomQuestionForm data={dataStage2_2}/>
				}
				{activeStage === 4 && resultStage2_2 === '2_2_1' &&
					<CustomQuestionForm data={dataStage2_2_1}/>
				}
				{activeStage === 4 && resultStage2_2 === '2_2_2' &&
					<CustomQuestionForm data={dataStage2_2_2}/>
				}
				{activeStage === 4 && resultStage2_2 === '2_2_3' &&
					<CustomQuestionForm data={dataStage2_2_3}/>
				}
				{activeStage === 4 && resultStage2_2 === '2_2_4' &&
					<CustomQuestionForm data={dataStage2_2_4}/>
				}
				{activeStage === 4 && resultStage2_2 === '2_2_5' &&
					<CustomQuestionForm data={dataStage2_2_5}/>
				}
				{activeStage === 5 && resultStage2_2_2 === '2_2_2_1' &&
					<CustomQuestionForm data={dataStage2_2_2_1}/>
				}
				{activeStage === 5 && resultStage2_2_2 === '2_2_2_2' &&
					<CustomQuestionForm data={dataStage2_2_2_2}/>
				}
				{activeStage === 5 && resultStage2_2_2 === '2_2_2_3' &&
					<CustomQuestionForm data={dataStage2_2_2_3}/>
				}
				{activeStage === 5 && resultStage2_2_2 === '2_2_2_4' &&
					<CustomQuestionForm data={dataStage2_2_2_4}/>
				}
				{activeStage === 5 && resultStage2_2_2 === '2_2_2_5' &&
					<CustomQuestionForm data={dataStage2_2_2_5}/>
				}
				{activeStage === 3 && resultStage2 === '2_3' &&
					<CustomQuestionForm data={dataStage2_3}/>
				}
				{activeStage === 4 && resultStage2_3 === '2_3_1' &&
					<CustomQuestionForm data={dataStage2_3_1}/>
				}
				{activeStage === 4 && resultStage2_3 === '2_3_2' &&
					<CustomQuestionForm data={dataStage2_3_2}/>
				}
				{activeStage === 4 && resultStage2_3 === '2_3_3' &&
					<CustomQuestionForm data={dataStage2_3_3}/>
				}
				{activeStage === 4 && resultStage2_3 === '2_3_4' &&
					<CustomQuestionForm data={dataStage2_3_4}/>
				}
				{activeStage === 5 && resultStage2_3_1 === '2_3_1_1' &&
					<CustomQuestionForm data={dataStage2_3_1_1}/>
				}
				{activeStage === 5 && resultStage2_3_1 === '2_3_1_2' &&
					<CustomQuestionForm data={dataStage2_3_1_2}/>
				}
				{activeStage === 5 && resultStage2_3_1 === '2_3_1_3' &&
					<CustomQuestionForm data={dataStage2_3_1_3}/>
				}
				{activeStage === 5 && resultStage2_3_1 === '2_3_1_4' &&
					<CustomQuestionForm data={dataStage2_3_1_4}/>
				}
				{activeStage === 3 && resultStage2 === '2_4' &&
					<CustomQuestionForm data={dataStage2_4}/>
				}
				{activeStage === 4 && resultStage2_4 === '2_4_1' &&
					<CustomQuestionForm data={dataStage2_4_1}/>
				}
				{activeStage === 4 && resultStage2_4 === '2_4_2' &&
					<CustomQuestionForm data={dataStage2_4_2}/>
				}
				{activeStage === 4 && resultStage2_4 === '2_4_3' &&
					<CustomQuestionForm data={dataStage2_4_3}/>
				}
				<div className={cls.actions}>
					<Button
						theme={ButtonTheme.PRIMARY}
						className={cls.submitBtn}
						onClick={activeStage === lastStage ? onSubmit : handleNextStage}
						disabled={activeStage !== 1 && filter === ''}
					>
						{activeStage === lastStage ? 'Закончить опрос' : 'Далее'}
					</Button>
					{activeStage !== 1 &&
						<Button
							theme={ButtonTheme.OUTLINE}
							className={cls.submitBtn}
							onClick={handleBackStage}
						>
							Назад
						</Button>
					}
				</div>
			</div>
		</Modal>
	)
}