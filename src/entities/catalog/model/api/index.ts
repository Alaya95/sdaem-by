import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {baseUrl} from "../../../../shared/API";
import {ICatalog} from "../types/catalogTypes";

const pathQuery = 'catalog'

const catalogAttachOtherData = '_expand=metro&_expand=cities&_expand=rooms&_expand=district'

export const catalogApi = createApi({
    reducerPath: "catalogApi",
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    tagTypes: ["Catalog"],
    endpoints: (build)=> ({
        getCatalogAll: build.query<ICatalog[], string>({
            query: () => ({
                url: `/${pathQuery}/?${catalogAttachOtherData}`,
            })
        }),
        getCatalogItemById: build.query<ICatalog, number>({
            query: (id) => ({
                url: `/${pathQuery}/${id}`
            })
        }),
        getCatalogItemLimit: build.query<ICatalog[], number>({
            query: (limit) => ({
                url: `/${pathQuery}?_limit=${limit}&${catalogAttachOtherData}`
            })
        }),
    })
})