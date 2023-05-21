import { classNames } from '../../../lib/classNames';
import React, {
	InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import cls from './input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
	className?: string;
	value?: string;
	onChange?: (value: string) => void;
	autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
	const {
		className,
		value,
		onChange,
		type = 'text',
		placeholder,
		autofocus,
		...otherProps
	} = props;
	const ref = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (autofocus) {
			ref.current?.focus();
		}
	}, [autofocus]);

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<div className={classNames(cls.InputWrapper, {}, [className])}>
				<input
					ref={ref}
					type={type}
					value={value}
					placeholder={placeholder}
					onChange={onChangeHandler}
					className={cls.input}
					{...otherProps}
				/>
		</div>
	);
});
