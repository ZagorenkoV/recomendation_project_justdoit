import classes from "./block.module.scss";
import {Text} from "../../ui/text/Text";
import {ReactNode} from "react";

type BlockProps = {
	title?: string
	children: ReactNode
}

const Block = ({title, children}: BlockProps) => {
	return (
		<div className={classes.container}>
			<Text title={title}/>
			{children}
		</div>

	);
};

export default Block