import {FC, createContext, ReactNode, useState, useEffect, useCallback} from "react";
import {IContextProps} from "./types";
import {useHttp} from "../hooks/useHttp";

interface Props {
	children: ReactNode;
}

export const appContext = createContext({} as IContextProps)

const ContextProvider: FC<Props> = ({children}) => {
	const [activeStage, setActiveStage] = useState<number>(1)
	const [lastStage, setLastStage] = useState<number>(4)
	const [userData, setUserData] = useState({
		firstName: '',
		middleName: '',
		lastName: '',
		birthDate: ''
	})
	const [filter, setFilter] = useState('')
	const [resultStage2, setResultStage2] = useState<string>()
	const [resultStage2_1, setResultStage2_1] = useState<string>()
	const [resultStage2_2, setResultStage2_2] = useState<string>()
	const [resultStage2_2_2, setResultStage2_2_2] = useState<string>()
	const [resultStage2_3, setResultStage2_3] = useState<string>()
	const [resultStage2_3_1, setResultStage2_3_1] = useState<string>()
	const [resultStage2_4, setResultStage2_4] = useState<string>()

	const {request} = useHttp()
	// const {position} = usePosition()

	useEffect(() => {
		if (resultStage2_2_2 || resultStage2_3_1) {
			setLastStage((prevState) => prevState + 1)
		}
	}, [resultStage2_2_2, resultStage2_3_1])

	const resetAllStages = useCallback(() => {
		setResultStage2('')
		setResultStage2_1('')
		setResultStage2_2('')
		setResultStage2_3('')
		setResultStage2_4('')
		setResultStage2_2_2('')
		setResultStage2_3_1('')
		setActiveStage(1)
		setLastStage(4)
		setFilter('')
	}, [])

	return (
		<appContext.Provider value={{
			resetAllStages,
			filter,
			activeStage,
			lastStage,
			userData,
			resultStage2,
			resultStage2_1,
			resultStage2_2,
			resultStage2_2_2,
			resultStage2_3,
			resultStage2_3_1,
			resultStage2_4,
			setFilter,
			setActiveStage,
			setLastStage,
			setUserData,
			setResultStage2,
			setResultStage2_1,
			setResultStage2_2,
			setResultStage2_2_2,
			setResultStage2_3,
			setResultStage2_3_1,
			setResultStage2_4,
		}}>
			{children}
		</appContext.Provider>
	)
}

export default ContextProvider;