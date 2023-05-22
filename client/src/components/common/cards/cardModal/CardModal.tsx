import {classNames} from "../../../../lib/classNames";
import {Text} from "../../../ui/text/Text";
import {Modal} from "../../../ui/modal/Modal";

interface LoginModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const CardModal = ({ className, isOpen, onClose }: LoginModalProps) => (
	<Modal
		className={classNames('', {}, [className])}
		isOpen={isOpen}
		onClose={onClose}
		lazy
	>
		<Text title={'Модалка карточки'}/>
	</Modal>
);
