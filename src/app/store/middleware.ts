import {citiesModel} from "../../entities/cities";
import {newsModel} from "../../entities/news";

export const middlewareStore = [
    citiesModel.citiesApi.middleware,
    newsModel.newsApi.middleware
]