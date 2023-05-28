import {IPopularEvents} from "../../mock/popularEvents";

interface IUserDataProps {
	firstName: string,
	middleName: string,
	lastName: string,
	birthDate: string
}

export interface IContextProps {
	filter: string;
	popular: IPopularEvents[];
	activeStage: number;
	lastStage: number;
	userData: IUserDataProps;
	resultStage2: string | undefined;
	resultStage2_1: string | undefined;
	resultStage2_2: string | undefined;
	resultStage2_2_2: string | undefined;
	resultStage2_3: string | undefined;
	resultStage2_3_1: string | undefined;
	resultStage2_4: string | undefined;
	setFilter: (filter: string) => void;
	setActiveStage: (activeStage: number) => void;
	setLastStage: (lastStage: number) => void;
	setUserData: (userData: IUserDataProps) => void;
	setResultStage2: (result: string) => void;
	setResultStage2_1: (result: string) => void;
	setResultStage2_2: (result: string) => void;
	setResultStage2_2_2: (result: string) => void;
	setResultStage2_3: (result: string) => void;
	setResultStage2_3_1: (result: string) => void;
	setResultStage2_4: (result: string) => void;
}