import {classNames} from "../../../../lib/classNames";
import {Text, TextTheme} from "../../../ui/text/Text";
import {Modal} from "../../../ui/modal/Modal";
import cls from "./cardModal.module.scss";
import {Button, ButtonTheme} from "../../../ui/button/Button";
import React, {useEffect, useState} from "react";
import {Tag, TagTheme} from "../../../ui/tag/Tag";
import {Placemark, YMaps, Map} from "@pbe/react-yandex-maps";
import {useHttp} from "../../../../hooks/useHttp";
import axios from "axios";

interface CardModalProps {
	className?: string;
	category: string;
	title: string;
	description: string;
	address?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const CardModal = ({className, category, title, description, address, isOpen, onClose}: CardModalProps) => {

	const {request} = useHttp()
	const [pos, setPos] = useState('')
	const [latitude, setLatitude] = useState<number>()
	const [longitude, setLongitude] = useState<number>()

	useEffect(() => {
		if (isOpen && address) {
			axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=18151c0e-e0fb-4f01-bac0-2b19de34e97a&format=json&geocode=${address}`)
				.then(data => {
					setPos(data.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos)
					if (pos !== '') {
						const coordinates = pos.split(" ");
						setLatitude(parseFloat(coordinates[0]));
						setLongitude(parseFloat(coordinates[1]));
					}
				})
		}

	}, [isOpen, pos])

	return (
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
						{/*<Tag text={'Группа занимается'}/>*/}
						{/*<Tag text={'Запись продолжается'}/>*/}
					</div>
					<Text
						text={description}
						className={cls['card-description']}
					/>
					<Text
						text={`Адрес: ${address}`}
						className={cls['card-address']}
					/>
					<div>
						{latitude && longitude &&
							<YMaps query={{apikey: '18151c0e-e0fb-4f01-bac0-2b19de34e97a'}}>
								<Map
									className={cls.map}
									defaultState={{
										center: [longitude, latitude],
										zoom: 15,
										controls: ["zoomControl", "fullscreenControl"],
									}}
									modules={["control.ZoomControl", "control.FullscreenControl"]}
								>
									<Placemark defaultGeometry={[longitude, latitude]}/>
								</Map>
							</YMaps>}
					</div>
				</div>
				<div className={cls.additional}>
					<div>
						<Text
							text={'Телефон для справок:'}
						/>
						<Text
							text={'+7(495)870-44-44'}
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
};
