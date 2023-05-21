import React, {FC} from 'react';
import cls from "./page404.module.scss"
import {Button, ButtonTheme} from "../../ui/button/Button";
import {Link} from "react-router-dom";
import {Text} from "../../ui/text/Text";

const Page404: FC = () => {
    return (
        <div className={cls.wrapper}>
            <Text text={'Cтраница не найдена...'}/>
                <Link to={'/'}>
                    <Button theme={ButtonTheme.PRIMARY}>На Главную</Button>
                </Link>
        </div>
    );
};

export default Page404;