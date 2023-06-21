import cls from "./header.module.scss";
import {classNames} from "../../../lib/classNames";

const Header = () => {
	return (
		<div className={classNames(cls.Header, {}, [])}>
			<span className={cls['project-title']}>
				Рекомендательный сервис
			</span>
		</div>

	);
};

export default Header