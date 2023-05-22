import React, {FC} from 'react';
import cls from "./layout.module.scss"
import {classNames} from "../lib/classNames";

interface LayoutProps {
	className?: string;
    children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({children, className}) => {
    return (
        <>
            <main className={classNames(cls.Layout, {}, [className])}>
                {children}
            </main>
        </>
    );
};

export default Layout;