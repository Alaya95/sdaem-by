import React, {FC} from 'react';
import cls from "./input.module.scss";
import {InputPropsTypes} from "./InputTypes";

export const Input: FC<InputPropsTypes> = ({type, className, error,icon, placeholder, ...otherProps}) => {
    return (
        <div className={cls.field}>
            {icon}
            <input
                {...otherProps}
                placeholder={placeholder}
                className={cls.input}
                type={type}
            />
        </div>
    );
}
