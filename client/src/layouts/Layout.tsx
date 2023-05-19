import React, {FC} from 'react';
import styles from "./layout.module.scss"

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <>
            <main className={styles.main}>
                {children}
            </main>
        </>
    );
};

export default Layout;