import {FC, createContext, ReactNode, useState} from "react";
import {IContextProps} from "./types";

interface Props {
	children: ReactNode;
}

export const appContext = createContext({} as IContextProps)

const ContextProvider: FC<Props> = ({children}) => {
	const [activeStage, setActiveStage] = useState<number>(1)
	const [userData, setUserData] = useState({
		firstName: '',
		middleName: '',
		lastName: '',
		birthDate: ''
	})
	const [resultStage2, setResultStage2] = useState<string>()
	const [resultStage3, setResultStage3] = useState<string>()


	return (
		<appContext.Provider value={{
			activeStage,
			userData,
			resultStage2,
			resultStage3,
			setActiveStage,
			setUserData,
			setResultStage2,
			setResultStage3,
		}}>
			{children}
		</appContext.Provider>
	)
}

export default ContextProvider;