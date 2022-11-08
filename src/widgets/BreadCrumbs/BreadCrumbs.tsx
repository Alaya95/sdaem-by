import React from 'react';
import { ReactComponent as HomeSvg }  from '../../app/assets/icons/home-run.svg';
import cls from './breadcrumbs.module.scss';

export const BreadCrumbs = () => {
  return (
    <div className={cls.breadcrumbs}>
        <a className={cls.breadcrumbs__link} href="/"><HomeSvg /></a>
        <a className={cls.breadcrumbs__link} href="/">Новости</a>
    </div>
  );
};
