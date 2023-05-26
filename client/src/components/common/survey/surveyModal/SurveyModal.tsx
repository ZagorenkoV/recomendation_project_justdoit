import {classNames} from "../../../../lib/classNames";
import {Modal} from "../../../ui/modal/Modal";
import cls from "./surveyModal.module.scss";
import {Button, ButtonTheme} from "../../../ui/button/Button";
import React, {useContext} from "react";
import {Text, TextTheme} from "../../../ui/text/Text";
import {appContext} from "../../../../context/context";
import {UserDataForm} from "../surveyForms/userDataForm/UserDataForm";
import {CustomQuestionForm} from "../surveyForms/customQuestionForm/CustomQuestionForm";
import {dataStage2, dataStage3, dataStage4, dataStage5} from "../../../../mock/questions";

interface SurveyModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const SurveyModal = ({className, isOpen, onClose}: SurveyModalProps) => {
	const {activeStage, userData, setActiveStage, resultStage2, resultStage3} = useContext(appContext)
	const lastStage = 3

	const handleNextStage = () => {
		if (activeStage === 1) {
			console.log(`Отправка данных на бэк: ${[JSON.stringify(userData)]}`)
		}

		if (activeStage < lastStage) {
			setActiveStage(activeStage + 1)
		}

		if (activeStage === lastStage) {
			onClose();
		}
	}

	const handleBackStage = () => {
		setActiveStage(activeStage - 1)
	}

	const onSubmit = () => {
		console.log(`Отправка данных на бэк: ${resultStage2}, ${resultStage3}`)
	}

	return (
		<Modal
			className={classNames(cls.SurveyModal, {}, [className])}
			isOpen={isOpen}
			onClose={onClose}
			lazy
		>
			<div className={cls['modal-content']}>
				<Text
					theme={TextTheme.SECONDARY}
					text={`Шаг ${activeStage} из ${lastStage}`}
					className={cls.category}
				/>
				{activeStage === 1 &&
					<UserDataForm/>
				}
				{activeStage === 2 &&
					<CustomQuestionForm title={'Название вопроса на шаге 2'} data={dataStage2}/>
				}
				{(activeStage === 3 && resultStage2 === '2_1') &&
					<CustomQuestionForm title={'Название вопроса на шаге 3'} data={dataStage3}/>
				}
				{(activeStage === 3 && resultStage2 === '2_2') &&
					<CustomQuestionForm title={'Название вопроса на шаге 3'} data={dataStage4}/>
				}
				{(activeStage === 3 && resultStage2 === '2_3') &&
					<CustomQuestionForm title={'Название вопроса на шаге 3'} data={dataStage5}/>
				}
				<div className={cls.actions}>
					<Button
						theme={ButtonTheme.PRIMARY}
						className={cls.submitBtn}
						onClick={activeStage === lastStage ? onSubmit : handleNextStage}
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