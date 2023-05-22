import React, {FC} from 'react';
import Search from "../../common/search/Search";
import Popular from "../../common/Popular/Popular";

const MainPage: FC = () => {	
    return (
		<>
			<Search/>
			<Popular/>
		</>
    );
};

export default MainPage;