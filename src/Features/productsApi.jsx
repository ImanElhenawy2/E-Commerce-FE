import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


 const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({baseURL : 'http://ecommerce-api.onrender.com'}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `products`,
        }),
    }),
});

export const { useGetAllProductsQuery} = productsApi;

export default productsApi;