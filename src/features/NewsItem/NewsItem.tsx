import React, {FC} from "react";
import cls from './newsItem.module.scss';
import {NewsItemTypes} from "./NewsItemTypes";
import classNames from "classnames";
import {Link} from "react-router-dom";

export const NewsItem: FC<NewsItemTypes> = ({className, data}) => {
    return (
        <div className={classNames(cls.news, className)}>
            <div className={cls.news__img}>
                <img src={data.imgUrl} alt="photo"/>
            </div>
            <div className={cls.news__content}>
                <h3 className={cls.news__title}>{data.title}</h3>
                <div className={cls.text}>
                    {data.description.map(item => (
                        <p className={cls.news__desc}>{item}</p>
                    ))}
                </div>
                <div className={cls.news__bottom}>
                    <p className={cls.news__data}>{data.date}</p>
                    <Link to={`/news/${data.id}`} className={cls.news__link}>Читать</Link>
                </div>
            </div>
        </div>
    )
}
