import cls from "./fetchError.module.scss";
import {Text, TextTheme} from "../../text/Text";
import {classNames} from "../../../../lib/classNames";

type FetchErrorProps = {
	error: string
}

const FetchError = ({error}: FetchErrorProps) => {
	return (
		<div className={classNames(cls.FetchError, {}, [])}>
			<Text className={cls.message} text={error} theme={TextTheme.ERROR}/>
		</div>

	);
};

export default FetchError;