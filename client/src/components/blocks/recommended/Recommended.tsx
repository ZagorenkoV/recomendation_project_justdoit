import React, {FC, useCallback, useContext, useState} from "react";
import cls from "./recommended.module.scss";
import {Text} from "../../ui/text/Text";
import {classNames} from "../../../lib/classNames";
import Cards from "../../common/cards/Cards";
import {Button, ButtonSize, ButtonTheme} from "../../ui/button/Button";
import {SurveyModal} from "../../common/survey/surveyModal/SurveyModal";
import {recommendedEvents} from "../../../mock/recommendedEvents";
import {appContext} from "../../../context/context";

interface PopularProps {
	className?: string;
}

export const Recommended: FC = ({className}: PopularProps) => {

	const [isOpenModal, setIsOpenModal] = useState(false);
	const {resetAllStages} = useContext(appContext)

	const onCloseModal = useCallback(() => {
		setIsOpenModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsOpenModal(true);
		resetAllStages()
	}, []);

	return (
		<div className={classNames(cls.Recommended, {}, [className])}>
			<div>
				<Text title={'Подобрать индивидуальные занятия'}/>
				<Text text={'Пройдите наш опрос и узнайте, какие направления подходят именно Вам'}/>
				<Button
					theme={ButtonTheme.PRIMARY}
					size={ButtonSize.L}
					className={cls['recommend-btn']}
					onClick={onShowModal}
				>
					Подобрать занятия
				</Button>
			</div>

			{recommendedEvents.length > 0 &&
				<>
					<Text title={'Рекомендованные занятия'}/>
					<Cards data={recommendedEvents}/>
				</>
			}
			<SurveyModal
				isOpen={isOpenModal}
				onClose={onCloseModal}
			/>
		</div>
	);
};