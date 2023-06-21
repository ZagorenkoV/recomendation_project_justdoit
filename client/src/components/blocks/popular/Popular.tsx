import React, {FC, useEffect} from "react";
import cls from "./popular.module.scss";
import {Text} from "../../ui/text/Text";
import {classNames} from "../../../lib/classNames";
import Cards from "../../common/cards/Cards";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import Spinner from "../../ui/spinner/Spinner";
import FetchError from "../../ui/error/fetch-error/FetchError";
import {fetchPopular} from "../../../redux/slices/data/popularSlice";

interface PopularProps {
	className?: string;
}

export const Popular: FC = ({className}: PopularProps) => {

	const {popularData, popularLoading, popularError} = useAppSelector(state => state.popular);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchPopular())
	}, [dispatch])

	return (
		<div className={classNames(cls.Popular, {}, [className])}>
			
			{popularLoading && <Spinner/>}

			{popularError && <FetchError error={popularError}/>}

			{popularData.length > 0 &&
				<Cards data={popularData}/>
			}
		</div>
	);
};