import React from 'react';
import cls from './pagination.module.scss';
import classNames from "classnames";

export const Pagination = () => {
    return (
        <div className={cls.pagination}>
            <a className={classNames(cls.pagination__link, cls.active)} href="/">1</a>
            <a className={cls.pagination__link} href="/">2</a>
            <a className={cls.pagination__link} href="/">3</a>
            <a className={cls.pagination__link} href="/">4</a>
            <a className={cls.pagination__link} href="/">...</a>
            <a className={cls.pagination__link} href="/">11</a>
        </div>
    );
}
