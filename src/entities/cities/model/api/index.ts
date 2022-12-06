import {baseUrl} from "../../../../shared/API";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {ICity} from "../types/citiesTypes";

export const citiesApi = createApi({
    reducerPath: 'citiesApi',
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    tagTypes: ["Cities"],
    endpoints: (build) => ({
        getCities: build.query<ICity[], string>({
            query: () => ({
                url: `/cities`
            })
        })
    })
})