import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from './product.types';



export const productApi = createApi({
    reducerPath: 'api/products',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: build => ({
        getAllProducts: build.query<IProduct[], number>({ query: (limit = 9) => `products?limit=${limit}` })
    })
})

export const { useGetAllProductsQuery } = productApi