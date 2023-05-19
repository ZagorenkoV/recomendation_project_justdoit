import React, {FC} from 'react';
import styles from "./page404.module.scss"
import MyButton from "../../ui/buttons/MyButton";
import {Link} from "react-router-dom";

const Page404: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Cтраница не найдена..</div>
            <div className={styles.button}>
                <Link to={'/'}>
                    <MyButton>На Главную</MyButton>
                </Link>
            </div>


        </div>
    );
};

export default Page404;