import cls from "./block.module.scss";
import {Text} from "../../ui/text/Text";
import {ReactNode} from "react";
import {classNames} from "../../../lib/classNames";

type BlockProps = {
	className?: string
	title?: string
	children: ReactNode
}

const Block = ({className, title, children}: BlockProps) => {
	return (
		<div className={classNames(cls.Block, {}, [className])}>
			<Text title={title} className={cls.title}/>
			<div className={cls.content}>
				{children}
			</div>
		</div>

	);
};

export default Block