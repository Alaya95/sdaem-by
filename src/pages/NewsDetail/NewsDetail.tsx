import React from 'react';
import cls from './newsDetail.module.scss';
import {NewsItem} from "../../features/NewsItem/NewsItem";
import {DateCustom} from "../../shared/ui/DateCustom/DateCustom";
import {SocialsIcons} from "../../widgets/SocialIcons/SocialIcons";
import NewsPhoto from '../../app/assets/img/newphoto.png'
import {newsModel} from '../../entities/news'

export const NewsDetail = () => {
    const {data:news = []} = newsModel.newsApi.useGetNewsAllQuery('');

    return (
        <div className={cls.news}>
            <div className={cls.news__details}>
                <div className={cls.news__header}>
                    <div className={cls.news__title}>
                        <h4>Линия Сталина: суровый отдых в усадьбах на сутки </h4>
                    </div>

                    <div className={cls.news__wrapper}>
                        <DateCustom className={cls.news__date}>14 Января 2008</DateCustom>

                        <div className={cls.news__socials}>
                            <p>Поделиться</p>
                            <SocialsIcons classNameStyle={cls.news__icons} />
                        </div>
                    </div>
                </div>
                <div className={cls.news__image}>
                    <img src={NewsPhoto} alt="img-news"/>
                </div>

                <div className={cls.news__text}>
                    <p>
                        Итак, утром вы выезжаете в путь по Молодеченской трассе. Если автомобиля у вас нет - садитесь на
                        маршрутку в сторону Молодечно от железнодорожного вокзала. Остановка называется «Линия Сталина» -
                        да-да, именно здесь вы и проведёте ближайшие несколько часов, а вероятнее всего – останетесь до
                        самого вечера.
                    </p>
                    <p>
                        «Линия Сталина» - это уникальный музейный комплекс, располагающийся под открытым небом. Поэтому
                        желательно приезжать сюда в хорошую погоду. Его территория поистине огромна: целых 26 га. Такое
                        название
                        дано музею неспроста: «Линией Сталина» в 20е-30е гг. XX века именовали цепь укреплений, созданную
                        для
                        защиты государственной границы СССР. Комплекс же построен лишь в 2005 году – к шестидесятой
                        годовщине
                        Победы в Великой Отечественной войне.
                    </p>
                    <p>
                        Если вы заранее позаботились о том, чтобы снять усадьбу на сутки в направлении Молодечно, то можете
                        провести в музейном комплексе хоть целый день. Здесь действительно есть на что посмотреть: ДОТы,
                        испещрённые следами немецких снарядов, окопы, противотанковые заграждения, зенитные пушки,
                        бронетехника…
                        Вы встретите даже элементы ракетных войск – и всё это не муляжи, а настоящие боевые орудия! За
                        отдельную
                        плату вам предложат пострелять из винтовки и пулемёта, а также прокатиться на танке. Проголодались?
                        Загляните в кафе и насладитесь сытным домашним обедом.
                    </p>
                    <p>
                        Посетить «Линию Сталина» будет интересно как взрослым, так и детям. Особенно мальчишкам! Уставшие от
                        впечатлений, они будут рады вместо долгой дороги домой остановиться на ночь в уютном современном
                        коттедже. На сайте можно выбрать и снять посуточно наиболее удобный для вас вариант. Проведите
                        незабываемые выходные за городом – приезжайте в «Линию Сталина»!
                    </p>
                    <p>
                        Отличная усадьба в 10 км от "Линии Сталина".
                    </p>
                </div>
            </div>

            <div className={cls.news__recommend}>
                <p className={cls.title}>Читайте также</p>

                <div className={cls.news__wrapper}>
                    {news.slice(0, 3).map(item =>(
                        <NewsItem className={cls.news__item} key={item.id} data={item}/>
                    ))}
                </div>
            </div>
        </div>
    );
}
