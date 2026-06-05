import { CreateProductType, ProductType } from "@/lib/products";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const ecommerceApi = createApi({
    reducerPath: 'ecommerceApi',
    baseQuery: fetchBaseQuery({
        // baseUrl: process.env.NEXT_PUBLIC_BASE_ISHOP_API_URL
        baseUrl: `https://ishop.cheat.casa/api/v1`
    }),
    endpoints:(builder) => ({
        getAllProduct: builder.query<ProductType, void>({
            query: () => `/products`
        }),

        getProductByUuid: builder.query<ProductType, string>({
            query: (uuid: string) => ({
                url: `/products/${uuid}`
            })
        }), 
        // create product
        createProduct: builder.mutation<CreateProductType>({
            query: (newProduct: CreateProductType) => ({
                url: `/products`,
                method: 'POST', 
                headers: {
                    'content-type' : 'application/json',
                    'authentication': `berer ${process.env.ACCESS_TOKEN}`
                }
            })
        })
    })
})

export const {
    useGetAllProductQuery
} = ecommerceApi;