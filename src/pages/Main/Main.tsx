import React from 'react';
import cls from './Main.module.scss';
import {Filters} from "../../widgets/Filters/Filters";

export const Main = () => {
  return (
    <div className={cls.main}>
        <div className="container">
            <div className={cls.main__filter}>
                <Filters />
            </div>
        </div>
    </div>
  );
};
