interface IUserDataProps {
	firstName: string,
	middleName: string,
	lastName: string,
	birthDate: string
}

export interface IContextProps {
	activeStage: number;
	userData: IUserDataProps;
	resultStage2: string | undefined;
	resultStage3: string | undefined;
	setActiveStage: (activeStage: number) => void;
	setUserData: (userData: IUserDataProps) => void;
	setResultStage2: (result: string) => void;
	setResultStage3: (result: string) => void;
}