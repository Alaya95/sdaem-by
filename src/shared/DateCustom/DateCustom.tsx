import React, {FC, PropsWithChildren} from 'react';
// import cls from "../../features/NewsItem/newsItem.module.scss";
import cls from './dateCustom.module.scss';
import classNames from "classnames";

interface DateCustomProps extends PropsWithChildren {
    className?: string | undefined,
}

export const DateCustom:FC <DateCustomProps> = ({children, className}) => {

    return (
        <div className={ classNames(cls.date, className)}>
            <p>
                {children}
            </p>
        </div>
    );
};