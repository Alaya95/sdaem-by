import {citiesModel} from "../../entities/cities";
import {newsModel} from "../../entities/news";
import {catalogModel} from "../../entities/catalog";

export const middlewareStore = [
    citiesModel.citiesApi.middleware,
    newsModel.newsApi.middleware,
    catalogModel.catalogApi.middleware
]