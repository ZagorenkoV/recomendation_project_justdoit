import React, {FC} from 'react';
import cls from "./layout.module.scss"
import {classNames} from "../lib/classNames";
import Header from "../components/common/header/Header";

interface LayoutProps {
	className?: string;
	children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({children, className}) => {
	return (
		<div className={classNames(cls.Layout, {}, [className])}>
			<header>
				<Header/>
			</header>
			<main>
				{children}
			</main>
		</div>
	);
};

export default Layout;