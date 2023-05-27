interface IQuestions {
	answerOptions: IAnswerOptions[]
}

export interface IAnswerOptions {
	answerText: string,
	value: string
}

//____________________________________________________________
export const dataStage2: IQuestions = {
	answerOptions: [
		{answerText: "Физкультура и здоровье", value: "2_1"},
		{answerText: "Образование", value: "2_2"},
		{answerText: "Творчество", value: "2_3"},
		{answerText: "Настольные и интеллектуальные игры", value: "2_4"}
	]
}

//____________________________________________________________
export const dataStage2_1: IQuestions = {
	answerOptions: [
		{answerText: "Спортивные направления", value: "2_1_1"},
		{answerText: "Для укрепления здоровья", value: "2_1_2"},
		{answerText: "Танцы", value: "2_1_3"},
		{answerText: "Физическая активность на дому", value: "2_1_4"}
	]
}
export const dataStage2_1_1: IQuestions = {
	answerOptions: [
		{answerText: "Борьба", value: "2_1_1_1"},
		{answerText: "Спортивные игры", value: "2_1_1_2"},
		{answerText: "Коньки", value: "2_1_1_3"},
		{answerText: "Лыжи", value: "2_1_1_4"},
	]
}
export const dataStage2_1_2: IQuestions = {
	answerOptions: [
		{answerText: "ГТО", value: "2_1_2_1"},
		{answerText: "ОФП", value: "2_1_2_2"},
		{answerText: "Гимнастика", value: "2_1_2_3"},
		{answerText: "Скандинавская ходьба", value: "2_1_2_4"},
		{answerText: "Фитнес, тренажеры", value: "2_1_2_5"},
		{answerText: "Тренировки долголетия", value: "2_1_2_6"},
	]
}
export const dataStage2_1_3: IQuestions = {
	answerOptions: [
		{answerText: "Очное занятие", value: "2_1_3_1"},
		{answerText: "Занятие на дому", value: "2_1_3_2"}
	]
}
export const dataStage2_1_4: IQuestions = {
	answerOptions: [
		{answerText: "Гимнастика на дому", value: "2_1_4_1"},
		{answerText: "ОФП на дому", value: "2_1_4_2"}
	]
}

//____________________________________________________________
export const dataStage2_2: IQuestions = {
	answerOptions: [
		{answerText: "Иностранные языки", value: "2_2_1"},
		{answerText: "Интеллектуальный клуб", value: "2_2_2"},
		{answerText: "Технические направления", value: "2_2_3"},
		{answerText: "Гуманитарные направления", value: "2_2_4"},
		{answerText: "Общие направления", value: "2_2_5"},
	]
}
export const dataStage2_2_1: IQuestions = {
	answerOptions: [
		{answerText: "Английский язык очное занятие", value: "2_2_1_1"},
		{answerText: "Английский язык на дому", value: "2_2_1_2"},
		{answerText: "Другие иностранные языки очное занятие", value: "2_2_1_3"},
		{answerText: "Другие иностранные языки на дому", value: "2_2_1_4"},
	]
}
export const dataStage2_2_2: IQuestions = {
	answerOptions: [
		{answerText: "Художественное направление", value: "2_2_2_1"},
		{answerText: "Техническое направление", value: "2_2_2_2"},
		{answerText: "Гуманитарное направление", value: "2_2_2_3"},
		{answerText: "Образовательное направление", value: "2_2_2_4"},
		{answerText: "Общие направления", value: "2_2_2_5"},
	]
}
export const dataStage2_2_2_1: IQuestions = {
	answerOptions: [
		{answerText: "Клубная работа очное занятие", value: "2_2_2_1_1"},
		{answerText: "История и искусство очное занятие", value: "2_2_2_1_2"},
		{answerText: "История и искусство на дому", value: "2_2_2_1_3"},
	]
}
export const dataStage2_2_2_2: IQuestions = {
	answerOptions: [
		{answerText: "Творческая мастерская очное занятие", value: "2_2_2_2_1"},
		{answerText: "Творческая мастерская на дому", value: "2_2_2_2_2"},
		{answerText: "Информационные технологии очное занятие", value: "2_2_2_2_3"},
		{answerText: "Информационные технологии на дому", value: "2_2_2_2_4"},
	]
}
export const dataStage2_2_2_3: IQuestions = {
	answerOptions: [
		{answerText: "Иностранные языки очное занятие", value: "2_2_2_3_1"},
		{answerText: "Иностранные языки на дому", value: "2_2_2_3_2"},
		{answerText: "Психологические тренинги очное занятие", value: "2_2_2_3_3"},
		{answerText: "Литература очное занятие", value: "2_2_2_3_4"},
		{answerText: "Литература на дому", value: "2_2_2_3_5"},
	]
}
export const dataStage2_2_2_4: IQuestions = {
	answerOptions: [
		{answerText: "Образовательный практикум очное занятие", value: "2_2_2_4_1"},
		{answerText: "Образовательный практикум занятие на дому", value: "2_2_2_4_2"},
		{answerText: "Проф/подготовка занятие на дому", value: "2_2_2_4_3"},
	]
}
export const dataStage2_2_2_5: IQuestions = {
	answerOptions: [
		{answerText: "Домоводство очное занятие", value: "2_2_2_5_1"},
		{answerText: "Домоводство занятие на дому", value: "2_2_2_5_2"},
		{answerText: "Пеший лекторий очное занятие", value: "2_2_2_5_3"},
		{answerText: "Пеший лекторий занятие на дому", value: "2_2_2_5_4"},
	]
}
export const dataStage2_2_3: IQuestions = {
	answerOptions: [
		{answerText: "Информационные технологии очное занятие", value: "2_2_3_1"},
		{answerText: "Информационные технологии на дому", value: "2_2_3_2"},
		{answerText: "Киберспорт на дому", value: "2_2_3_3"},
	]
}
export const dataStage2_2_4: IQuestions = {
	answerOptions: [
		{answerText: "История, искусство, краеведение очное занятие", value: "2_2_4_1"},
		{answerText: "История, искусство, краеведение на дому", value: "2_2_4_2"},
		{answerText: "Психология и коммуникация очное занятие", value: "2_2_4_3"},
		{answerText: "Психология и коммуникация на дому", value: "2_2_4_4"},
		{answerText: "Экология жизни очное занятие", value: "2_2_4_5"},
		{answerText: "Финансовая и правовая грамотность очное занятие", value: "2_2_4_6"},

	]
}
export const dataStage2_2_5: IQuestions = {
	answerOptions: [
		{answerText: "Образовательный практикум очное занятие", value: "2_2_5_1"},
		{answerText: "Образовательный практикум на дому", value: "2_2_5_2"},
		{answerText: "Здорово жить очное занятие", value: "2_2_5_3"},
		{answerText: "Здорово жить на дому", value: "2_2_5_4"},
		{answerText: "Серебряный университет очное занятие", value: "2_2_5_5"}
	]
}


//____________________________________________________________
export const dataStage2_3: IQuestions = {
	answerOptions: [
		{answerText: "Художественное направление", value: "2_3_1"},
		{answerText: "Музыкальное направление", value: "2_3_2"},
		{answerText: "Домоводство", value: "2_3_3"},
		{answerText: "Фото / видео", value: "2_3_4"},
	]
}
export const dataStage2_3_1: IQuestions = {
	answerOptions: [
		{answerText: "Рисование", value: "2_3_1_1"},
		{answerText: "Московский театрал", value: "2_3_1_2"},
		{answerText: "Красота и стиль", value: "2_3_1_3"},
		{answerText: "Художественно-прикладное творчество", value: "2_3_1_4"},
	]
}
export const dataStage2_3_1_1: IQuestions = {
	answerOptions: [
		{answerText: "Очное занятие", value: "2_3_1_1_1"},
		{answerText: "Занятие на дому", value: "2_3_1_1_2"}
	]
}
export const dataStage2_3_1_2: IQuestions = {
	answerOptions: [
		{answerText: "Очное занятие", value: "2_3_1_2_1"},
		{answerText: "Занятие на дому", value: "2_3_1_2_2"}
	]
}
export const dataStage2_3_1_3: IQuestions = {
	answerOptions: [
		{answerText: "Очное занятие", value: "2_3_1_3_1"},
		{answerText: "Занятие на дому", value: "2_3_1_3_2"}
	]
}
export const dataStage2_3_1_4: IQuestions = {
	answerOptions: [
		{answerText: "Очное занятие", value: "2_3_1_4_1"},
		{answerText: "Занятие на дому", value: "2_3_1_4_2"}
	]
}
export const dataStage2_3_2: IQuestions = {
	answerOptions: [
		{answerText: "Музыка, фольклор очное занятие", value: "2_3_2_1"},
		{answerText: "Музыка, фольклор занятие на дому", value: "2_3_2_2"},
		{answerText: "Пение очное занятие", value: "2_3_2_3"},
		{answerText: "Пение занятие на дому", value: "2_3_2_4"},
	]
}
export const dataStage2_3_3: IQuestions = {
	answerOptions: [
		{answerText: "Домоводство очное занятие", value: "2_3_3_1"},
		{answerText: "Домоводство занятие на дому", value: "2_3_3_2"},
	]
}
export const dataStage2_3_4: IQuestions = {
	answerOptions: [
		{answerText: "Фото/видео очное занятие", value: "2_3_4_1"},
		{answerText: "Фото/видео занятие на дому", value: "2_3_4_2"},
	]
}

//____________________________________________________________
export const dataStage2_4: IQuestions = {
	answerOptions: [
		{answerText: "Настольные игры", value: "2_4_1"},
		{answerText: "Интеллектуальные игры", value: "2_4_2"},
		{answerText: "Шахматы и шашки", value: "2_4_3"},
	]
}
export const dataStage2_4_1: IQuestions = {
	answerOptions: [
		{answerText: "Очное занятие", value: "2_4_1_1"},
		{answerText: "Занятие на дому", value: "2_4_1_2"},
	]
}
export const dataStage2_4_2: IQuestions = {
	answerOptions: [
		{answerText: "Очное занятие", value: "2_4_2_1"},
		{answerText: "Занятие на дому", value: "2_4_2_2"},
	]
}
export const dataStage2_4_3: IQuestions = {
	answerOptions: [
		{answerText: "Очное занятие", value: "2_4_3_1"},
		{answerText: "Занятие на дому", value: "2_4_3_2"},
	]
}