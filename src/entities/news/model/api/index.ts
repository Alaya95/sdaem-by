import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {baseUrl} from "../../../../shared/API";
import {INews} from "../types/newsTypes";

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    tagTypes: ["News"],
    endpoints: (build)  => ({
        getNewsAll: build.query<INews[], string>({
            query:() => ({
                url: `/news`
            }),
        }),

        getNewsByID: build.query<INews, number>({
        query: (id) => ({
            url: `/news/${id}`
        })
        })
    })
})