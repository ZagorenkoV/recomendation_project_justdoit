interface IQuestions {
	answerOptions: IAnswerOptions[]
}

export interface IAnswerOptions {
	answerText: string,
	value: string
}

export const dataStage2: IQuestions = {
	answerOptions: [
		{answerText: "Ответ №1 на шаге 2", value: "2_1"},
		{answerText: "Ответ №2 на шаге 2", value: "2_2"},
		{answerText: "Ответ №3 на шаге 2", value: "2_3"}
	]
}

export const dataStage3: IQuestions = {
	answerOptions: [
		{answerText: "Ответ №1 на шаге 3", value: "3_1"},
		{answerText: "Ответ №2 на шаге 3", value: "3_2"},
		{answerText: "Ответ №3 на шаге 3", value: "3_3"}
	]
}

export const dataStage4: IQuestions = {
	answerOptions: [
		{answerText: "Ответ №1 на шаге 4", value: "4_1"},
		{answerText: "Ответ №2 на шаге 4", value: "4_2"},
		{answerText: "Ответ №3 на шаге 4", value: "4_3"}
	]
}

export const dataStage5: IQuestions = {
	answerOptions: [
		{answerText: "Ответ №1 на шаге 5", value: "5_1"},
		{answerText: "Ответ №2 на шаге 5", value: "5_2"},
		{answerText: "Ответ №3 на шаге 5", value: "5_3"}
	]
}