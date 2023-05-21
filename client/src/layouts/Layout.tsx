import React, {FC} from 'react';
import cls from "./layout.module.scss"

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <>
            <main className={cls.main}>
                {children}
            </main>
        </>
    );
};

export default Layout;