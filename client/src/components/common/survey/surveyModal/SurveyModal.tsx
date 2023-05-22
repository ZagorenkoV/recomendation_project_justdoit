import {classNames} from "../../../../lib/classNames";
import {Modal} from "../../../ui/modal/Modal";
import cls from "./surveyModal.module.scss";
import {Button, ButtonTheme} from "../../../ui/button/Button";
import React, {useEffect, useState} from "react";
import {Text, TextTheme} from "../../../ui/text/Text";
import {questions} from "../../../../mock/questions";

interface SurveyModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const SurveyModal = ({ className, isOpen, onClose }: SurveyModalProps) => {

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
			console.log(answer)
		} else {
			setComplete(true)
			onSubmit()
		}
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
				text={`Шаг ${currentQuestion + 1} из ${questions.length}`}
				className={cls.category}
			/>
			<Text
				theme={TextTheme.TITLES}
				text={questions[currentQuestion].questionText}
				className={cls['survey-title']}
			/>
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
		</div>
		<div className={cls.actions}>
			<Button
				theme={ButtonTheme.PRIMARY}
				className={cls.submitBtn}
			>
				Далее
			</Button>
		</div>
	</Modal>
)
}
