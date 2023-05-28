import {classNames} from '../../../lib/classNames';
import React, {
	ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import cls from './modal.module.scss';
import {Portal} from "../portal/Portal";

interface ModalProps {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
	small?: boolean;
	lazy?: boolean;
}

const ANIMATION_DELAY = 0;

export const Modal = (props: ModalProps) => {
	const {
		className,
		children,
		isOpen,
		small,
		onClose,
		lazy,
	} = props;

	const [isClosing, setIsClosing] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();

	useEffect(() => {
		if (isOpen) {
			setIsMounted(true);
		}
	}, [isOpen]);

	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true);
			timerRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, ANIMATION_DELAY);
		}
	}, [onClose]);

	// Новые ссылки!!!
	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			closeHandler();
		}
	}, [closeHandler]);

	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	const onCrossClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		closeHandler();
	};

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}

		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);

	const mods: Record<string, boolean | undefined> = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing,
		[cls.small]: small,
	};

	if (lazy && !isMounted) {
		return null;
	}

	return (
		<Portal>
			<div className={classNames(cls.Modal, mods, [className, 'app_modal'])}>
				<div className={cls.overlay} onClick={closeHandler}>

					<div
						className={cls.content}
						onClick={onContentClick}
					>
						<div className={cls['close-cross']} onClick={onCrossClick}>
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14"
								 fill="none">
								<path fillRule="evenodd" clipRule="evenodd"
									  d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
									  fill="black"/>
							</svg>
						</div>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};
