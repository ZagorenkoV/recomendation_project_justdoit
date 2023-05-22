import React, {FC} from 'react';
import Search from "../../blocks/search/Search";
import Popular from "../../blocks/popular/Popular";
import Recommended from "../../blocks/recommended/Recommended";

const MainPage: FC = () => {	
    return (
		<>
			<Search/>
			<Popular/>
			<Recommended/>
		</>
    );
};

export default MainPage;