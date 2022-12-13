import React from "react";
import cls from "./catalogFilter.module.scss";
import { ROOMS } from "../../widgets/Filters/data";
import { Select } from "../../shared/ui/Select/Select";

import { ReactComponent as SettingSvg } from "../../app/assets/icons/setting.svg";
import { ReactComponent as LocationSvg } from "../../app/assets/icons/location.svg";
import { Button } from "../../shared/ui/Button/Button";
import { ReactComponent as ArrowSvg } from "../../app/assets/icons/chevron-down.svg";

export const CatalogFilter = () => {
  return (
    <div className={cls.catalog__filter}>
      <div className='container'>
        <div className={cls.filter__wrapper}>
          <div className={cls.filter__field}>
            <label>Комнаты</label>
            <Select label='Комнаты' name='rooms' dataArr={ROOMS} />
          </div>
          <hr />
          <div className={cls.filter__field}>
            <label>Цена за сутки</label>
            <div>
              <input type='text' placeholder='От' />
              <p> - </p>
              <input type='text' placeholder='До' />
            </div>
          </div>
          <hr />
          <div className={cls.filter__field}>
            <Button className={cls.filter__btn}>
              Больше опций <SettingSvg />
            </Button>
          </div>
          <hr />
          <div className={cls.filter__field}>
            <Button className={cls.filter__btn}>
              На карте <LocationSvg />
            </Button>
          </div>

          <hr />

          <Button>Очистить</Button>

          <div className={cls.filter__field}>
            <Button color='primary' className={cls.filter__btn}>
              Показать объекты <ArrowSvg />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
