import {classNames} from "../../../../lib/classNames";
import {Modal} from "../../../ui/modal/Modal";
import cls from "./surveyModal.module.scss";
import {Button, ButtonTheme} from "../../../ui/button/Button";
import React, {useContext, useEffect, useState} from "react";
import {Text, TextTheme} from "../../../ui/text/Text";
import {questions} from "../../../../mock/questions";
import {appContext} from "../../../../context/context";
import {UserDataForm} from "../surveyForms/userDataForm/UserDataForm";

interface SurveyModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const SurveyModal = ({className, isOpen, onClose}: SurveyModalProps) => {

	const {activeStage, userData, setActiveStage} = useContext(appContext)
	const [currentQuestion, setCurrentQuestion] = useState<number>(0)
	const [complete, setComplete] = useState<boolean>(false)
	const [result, setResult] = useState<string[]>([])


	useEffect(() => {
		if (complete) {
			onClose()
		}
	}, [complete])

	const onSubmit = () => {
		console.log(result)
	}

	const handleAnswerOption = (answer: string) => {
		setResult([...result, answer])
		const nextQuestion = currentQuestion + 1

		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion)
			setActiveStage(activeStage + 1)
			console.log(answer)
		} else {
			setComplete(true)
			onSubmit()
		}
	}

	const handleChangeStage = () => {
		if (activeStage === 1) {
			console.log(`POST запрос на сервер с данными: ${[userData.firstName, userData.middleName, userData.lastName, userData.birthDate]}`)
		}
		setActiveStage(activeStage + 1)
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
					text={`Шаг ${activeStage} из 5`}
					className={cls.category}
				/>
				{activeStage === 1 &&
					<UserDataForm/>
				}
				{activeStage === 2 &&
					<div className={cls["answers-section"]}>
						{questions[currentQuestion].answerOptions.map((item, index) => (
							<Button
								theme={ButtonTheme.OUTLINE}
								className={cls.answerBtn}
								key={index}
								onClick={() => handleAnswerOption(item.answerText)}
							>
								{item.answerText}
							</Button>
						))
						}
					</div>
				}
				<div className={cls.actions}>
					<Button
						theme={ButtonTheme.PRIMARY}
						className={cls.submitBtn}
						onClick={handleChangeStage}
					>
						Далее
					</Button>
				</div>
			</div>
		</Modal>
	)
}
