import { ProductResponse, ProductType } from "@/lib/ecommerce/product";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const ecommerceApi = createApi({
    reducerPath: 'ecommerceApi',
    baseQuery: fetchBaseQuery({
        // baseUrl: process.env.NEXT_PUBLIC_BASE_ISHOP_API_URL
        baseUrl: `https://ishop.cheat.casa/api/v1`
    }),
    endpoints:(builder) => ({
        // product CRUD (create, read, update, delete)
        
        getAllProduct: builder.query<ProductResponse, {page: number, size:number}>({
            query: ({page, size}) => `/products?page=${page}&size=${size}`
        }),

        // get single product
        getSingleProduct: builder.query<ProductType, string>({
            query: (uuid) => `/products/${uuid}`
        }), 

        // create product
        // createProduct: builder.mutation<CreateProductType>({
        //     query: (newProduct: CreateProductType) => ({
        //         url: `/products`,
        //         method: 'POST', 
        //         headers: {
        //             'content-type' : 'application/json',
        //             'authentication': `berer ${process.env.ACCESS_TOKEN}`
        //         }
        //     })
        // })
    })
})

export const {
    useGetAllProductQuery,
    useGetSingleProductQuery
} = ecommerceApi;