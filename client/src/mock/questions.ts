interface IQuestions {
	questionText: string
	answerOptions: IAnswerOptions[]
}

interface IAnswerOptions {
	answerText: string,
	isChoose: boolean
}

export const questions: IQuestions[] = [
	{
		questionText: "Всегда ли Вы успешно дозванивались до службы технической поддержки?",
		answerOptions: [
			{answerText: "Да", isChoose: false,},
			{answerText: "Не всегда удается дозвониться с первого раза", isChoose: false,},
			{answerText: "Ни разу не дозвонился(лась)", isChoose: false,}
		]
	},
	{
		questionText: "Какие средства обращения в службу технической поддержки Вам подходят больше всего?",
		answerOptions: [
			{answerText: "Телефонная связь", isChoose: false,},
			{answerText: "Электронная почта", isChoose: false,},
			{answerText: "Личный кабинет пользователя на страничке \"Техподдержка КОНСИСТ-ОС\"", isChoose: false,},
			{answerText: "Электронная форма подачи запроса, расположенная в локальных разделах сайта ЛАЭС", isChoose: false,}
		]
	},
	{
		questionText: "Удовлетворены ли Вы работой сотрудников КОНСИСТ-ОС?",
		answerOptions: [
			{answerText: "Полностью удовлетворен(а)", isChoose: false,},
			{answerText: "Иногда возникают замечания к работе сотрудника КОНСИСТ-ОС", isChoose: false,},
			{answerText: "Мне приходилось жаловаться руководству на работу сотрудника КОНСИСТ-ОС", isChoose: false,}
		]
	},
	{
		questionText: "Удовлетворены ли Вы корректностью общения и внешним видом сотрудников КОНСИСТ-ОС?",
		answerOptions: [
			{answerText: "Да, сотрудники КОНСИСТ-ОС вежливы и соответствуют принципам корпоративной этики", isChoose: false,},
			{answerText: "Наличие униформы, выделяющее сотрудников КОНСИСТ-ОС, было бы уместным", isChoose: false,},
			{answerText: "Приходивший ко мне сотрудник КОНСИСТ-ОС выглядел неопрятным или был недостаточно вежлив", isChoose: false,}
		]
	},
];