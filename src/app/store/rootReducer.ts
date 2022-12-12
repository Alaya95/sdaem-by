import {combineReducers} from "@reduxjs/toolkit";
import {citiesModel} from "../../entities/cities";
import {newsModel} from "../../entities/news";
import {catalogModel} from "../../entities/catalog";

export const rootReducer = combineReducers({
    [citiesModel.citiesApi.reducerPath]: citiesModel.citiesApi.reducer,
    [newsModel.newsApi.reducerPath]: newsModel.newsApi.reducer,
    [catalogModel.catalogApi.reducerPath]: catalogModel.catalogApi.reducer
});