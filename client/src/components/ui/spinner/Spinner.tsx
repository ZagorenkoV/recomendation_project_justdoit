import React, {FC} from 'react';
import cls from "./spinner.module.scss";

const Spinner: FC = () => {
    return (
        <div className={cls.spinner}></div>
    );
};

export default Spinner;