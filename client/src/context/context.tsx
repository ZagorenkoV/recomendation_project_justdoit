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

	return (
		<appContext.Provider value={{
			activeStage,
			userData,
			setActiveStage,
			setUserData
		}}>
			{children}
		</appContext.Provider>
	)
}

export default ContextProvider;