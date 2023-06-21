import React, {FC, useCallback, useContext, useEffect, useState} from "react";
import cls from "./recommended.module.scss";
import {Text} from "../../ui/text/Text";
import {classNames} from "../../../lib/classNames";
import Cards from "../../common/cards/Cards";
import {Button, ButtonSize, ButtonTheme} from "../../ui/button/Button";
import {SurveyModal} from "../../common/survey/surveyModal/SurveyModal";
import {appContext} from "../../../context/context";
import {useAppSelector} from "../../../redux/hooks";
import Spinner from "../../ui/spinner/Spinner";
import FetchError from "../../ui/error/fetch-error/FetchError";

interface PopularProps {
	className?: string;
}

export const Recommended: FC = ({className}: PopularProps) => {

	const {
		surveyData,
		dateData,
		surveyLoading,
		surveyError,
		dateLoading,
		dateError
	} = useAppSelector(state => state.recommended);

	const [isOpenModal, setIsOpenModal] = useState(false);
	const {resetAllStages} = useContext(appContext)

	useEffect(() => {
		if (surveyData.length) {
			window.scrollBy({top: 2000, behavior: 'smooth'});
		}
	}, [surveyData])

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

			{(surveyLoading || dateLoading) && <Spinner/>}

			{surveyError && <FetchError error={surveyError}/>}

			{dateError && <FetchError error={dateError}/>}

			{surveyData.length > 0 &&
				<>
					<Text title={'Рекомендованные занятия'} className={cls['recommended-title']}/>
					<Cards data={surveyData}/>
				</>
			}

			{dateData.length > 0 &&
				<div style={{marginTop: '20px'}}>
					<Cards data={dateData}/>
				</div>
			}
			<SurveyModal
				isOpen={isOpenModal}
				onClose={onCloseModal}
			/>
		</div>
	);
};