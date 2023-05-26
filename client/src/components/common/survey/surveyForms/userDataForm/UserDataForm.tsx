import React, {useContext, useState} from 'react';
import cls from "../../surveyModal/surveyModal.module.scss";
import {Text, TextTheme} from "../../../../ui/text/Text";
import {Input} from "../../../../ui/input/Input";
import {Button, ButtonTheme} from "../../../../ui/button/Button";
import {appContext} from "../../../../../context/context";

export const UserDataForm = () => {
	const {userData, setUserData} = useContext(appContext)

	const handleFirstNameChange = (value: string) => {
		setUserData({
			...userData,
			firstName: value
		})
	}

	const handleMiddleNameChange = (value: string) => {
		setUserData({
			...userData,
			middleName: value
		})
	}

	const handleLastNameChange = (value: string) => {
		setUserData({
			...userData,
			lastName: value
		})
	}

	const handleBirthDateChange = (value: string) => {
		setUserData({
			...userData,
			birthDate: value
		})
	}


	return (
		<>
			<Text
				theme={TextTheme.TITLES}
				text={'Пожалуйста введите Ваши данные,'}
				className={cls['survey-title']}
			/>
			<Text
				text={'чтобы мы могли узнать посещали ли Вы наши занятия и подобрать для Вас лучшие рекомендации'}
				className={cls['survey-description']}
			/>

			<div className={cls['inputs-fio']}>
				<Input
					className={cls.input}
					placeholder={'Введите Ваше имя'}
					value={userData.firstName}
					onChange={handleFirstNameChange}
				/>
				<Input
					className={cls.input}
					placeholder={'Введите Вашу фамилию'}
					value={userData.middleName}
					onChange={handleMiddleNameChange}
				/>
				<Input
					className={cls.input}
					placeholder={'Введите Ваше Отчество'}
					value={userData.lastName}
					onChange={handleLastNameChange}
				/>
				<Input
					type="date"
					className={cls.input}
					placeholder={'Введите Ваш год рождения'}
					value={userData.birthDate}
					onChange={handleBirthDateChange}
				/>
			</div>
		</>
	);
};