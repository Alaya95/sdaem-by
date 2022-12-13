import React from "react";
import cls from "./sorting.module.scss";

import {Select} from "../../shared/ui/Select/Select";
import {Button} from "../../shared/ui/Button/Button";
import {catalogSortItems} from "../../pages/Catalog/data";

import {ReactComponent as BurgerMenuSvg} from "../../app/assets/icons/burger-menu.svg";
import {ReactComponent as TileMenuSvg} from "../../app/assets/icons/tile-menu.svg";
import {ReactComponent as LocationSvg} from "../../app/assets/icons/location.svg";

export const Sorting = () => {
    return (
        <div className={cls.sort}>
            <Select className={cls.sort__select} dataArr={catalogSortItems}/>
            <div className={cls.sort__actions}>
                <div className={cls.sort__view}>
                    <Button className={cls.sort__btn}><BurgerMenuSvg/> Списком</Button>
                    <Button><TileMenuSvg/> Плитки</Button>
                </div>
                <Button colors='primary'><LocationSvg/> Показать на карте</Button>
            </div>
        </div>
    );
}