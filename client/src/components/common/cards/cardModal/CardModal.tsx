import {classNames} from "../../../../lib/classNames";
import {Text, TextTheme} from "../../../ui/text/Text";
import {Modal} from "../../../ui/modal/Modal";
import cls from "./cardModal.module.scss";
import {Button, ButtonTheme} from "../../../ui/button/Button";
import React from "react";
import {Tag, TagTheme} from "../../../ui/tag/Tag";

interface LoginModalProps {
	className?: string;
	category: string;
	title: string;
	description: string;
	isOpen: boolean;
	onClose: () => void;
}

export const CardModal = ({ className, category, title, description, isOpen, onClose }: LoginModalProps) => (
	<Modal
		className={classNames(cls.CardModal, {}, [className])}
		isOpen={isOpen}
		onClose={onClose}
		lazy
	>
		<div className={cls['modal-content']}>
			<div className={cls.main}>
				<Text
					theme={TextTheme.SECONDARY}
					text={category}
					className={cls.category}
				/>
				<Text
					theme={TextTheme.TITLES}
					text={title}
					className={cls['card-title']}
				/>
				<div className={cls['card-tags']}>
					<Tag theme={TagTheme.ONLINE} text={'Онлайн'}/>
					<Tag text={'Группа занимается'}/>
					<Tag text={'Запись продолжается'}/>
				</div>
				<Text
					text={description}
					className={cls['card-description']}
				/>
				<Text
					text={'Адрес: город Москва, Люблинская улица, дом 125А, строение 1'}
					className={cls['card-address']}
				/>
			</div>
			<div className={cls.additional}>
				<div>
					<Text
						text={'Телефон для справок: +7(495)870-44-44'}
					/>
				</div>
				<div className={cls['card-group']}>
					<Text
						text={'Группа G-02065833'}
						className={cls['card-group-title']}
					/>
					<Text
						text={'Вт 11:00 - 12:00'}
						className={cls['card-group-time']}
					/>
				</div>
			</div>

		</div>
		<div className={cls.actions}>
			<Button
				theme={ButtonTheme.PRIMARY}
				className={cls.submitBtn}
			>
				Подать заявку
			</Button>
		</div>
	</Modal>
);
