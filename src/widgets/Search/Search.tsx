import React from "react";
import cls from "./search.module.scss";
import {ReactComponent as SearchSvg} from "../../app/assets/icons/search.svg";



export const Search = () => {
    return (
        <div className={cls.search}>
            <input placeholder='Поиск по статьям' className={cls.search__field} type="search"/>
            <button className={cls.search__btn}><SearchSvg /></button>
        </div>
    );
}
