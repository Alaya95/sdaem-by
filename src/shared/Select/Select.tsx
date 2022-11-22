import React, {FC} from 'react';
import {SelectPropsTypes} from "./SelectTypes";
import cls from './select.module.scss';
import classNames from "classnames";

export const Select:FC <SelectPropsTypes> = ({ dataArr, name, className }) => {
    return (
        <select className={classNames(cls.select, className)}  name={name}>
            <option hidden selected disabled>Выбрать</option>
            {dataArr.map(({id, value, name}) => {
                return (
                    <option value={value} key={id}>{name}</option>
                );
            })}
        </select>
    );
}
