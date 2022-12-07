import React from "react";
import cls from './news.module.scss';
import {BreadCrumbs} from "../../widgets/BreadCrumbs/BreadCrumbs";
import {NewsItem} from "../../features/NewsItem/NewsItem";
import {Pagination} from "../../widgets/Pagination/Pagination";
import {Search} from "../../widgets/Search/Search";
import {newsModel} from "../../entities/news";

export const News = () => {
    const {data: news = []} = newsModel.newsApi.useGetNewsAllQuery('');

    return (
        <div className={cls.news}>
            <div className='container'>
                <BreadCrumbs/>
                <div className={cls.news__header}>
                    <h3 className={cls.news__title}>Новости</h3>
                    <Search/>
                </div>
                <div className={cls.news__list}>
                    {news.map(item => (
                        <NewsItem key={item.id} data={item}/>
                    ))}
                </div>
                <Pagination/>
            </div>
        </div>
    );
}
