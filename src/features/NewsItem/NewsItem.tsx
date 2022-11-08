import React, {FC} from "react";
import cls from './newsItem.module.scss';
import {NewsItemTypes} from "./NewsItemTypes";
import classNames from "classnames";

export const NewsItem: FC <NewsItemTypes> = ( { className,data}) => {
return (
    <div className={classNames(cls.news, className)}>
        <div className={cls.news__img}>
            <img src={data.imgUrl} alt="photo"/>
        </div>
        <div className={cls.news__content}>
            <h3 className={cls.news__title}>{data.title}</h3>
            <p className={cls.news__desc}>{data.desc}</p>
            <div className={cls.news__bottom}>
                <p className={cls.news__data}>{data.date}</p>
                <a href='/' className={cls.news__link}>Читать</a>
            </div>
        </div>
    </div>
)
}
