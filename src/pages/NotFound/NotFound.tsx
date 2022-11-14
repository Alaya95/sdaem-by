import React from "react";
import cls from './notFound.module.scss';
import {Link} from "react-router-dom";
import {ReactComponent as HomeSvg} from '../../app/assets/icons/home-run.svg';
import {ReactComponent as PointSvg} from '../../app/assets/icons/points.svg';

export const NotFound = () => {
    return (
        <div className={cls.notfound}>
            <div className="container">
                <div className={cls.notfound__wrapper}>
                    <PointSvg className={cls.notfound__point}/>
                    <div className={cls.notfound__content}>
                        <h1 className={cls.notfound__title}>Ошибка 404</h1>
                        <p className={cls.notfound__text}>
                            Возможно, у вас опечатка в адресе страницы, или её просто не существует
                        </p>
                        <Link className={cls.notfound__link} to={'/'}>
                            <HomeSvg/>Вернуться на главную
                        </Link>
                    </div>
                    <div className={cls.notfound__code}>
                        404
                    </div>
                    <PointSvg className={cls.notfound__point} />
                </div>
            </div>
        </div>
    );
}