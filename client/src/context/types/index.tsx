interface IUserDataProps {
	firstName: string,
	middleName: string,
	lastName: string,
	birthDate: string
}

export interface IContextProps {
	activeStage: number;
	userData: IUserDataProps;
	setActiveStage: (activeStage: number) => void;
	setUserData: (userData: IUserDataProps) => void;
}