import classes from "./fetchError.module.scss";
import {Text} from "../../text/Text";

type FetchErrorProps = {
	error: string
}

const FetchError = ({error}: FetchErrorProps) => {
	return (
		<div className={classes.container}>
			<Text className={classes.message} title={error}/>
		</div>

	);
};

export default FetchError;