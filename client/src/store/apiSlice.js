import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURI = 'https://track-34as-2at790iol-kvs-projects-b0e39d5c.vercel.app';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
    endpoints: builder => ({
        getCategories: builder.query({
            query: () => '/api/categories',
            providesTags: ['categories']
        }),
        getLabels: builder.query({
            query: () => '/api/labels',
            providesTags: ['transaction']
        }),
        addTransaction: builder.mutation({
            query: (initialTransaction) => ({
                url: '/api/transaction',
                method: 'POST',
                body: initialTransaction
            }),
            invalidatesTags: ['transaction']
        }),
        deleteTransaction: builder.mutation({
            query: (recordId) => ({
                url: '/api/transaction',
                method: 'DELETE',
                body: recordId
            }),
            invalidatesTags: ['transaction']
        })
    })
});

/*export const {
    useGetCategoriesQuery,
    useGetLabelsQuery,
    useAddTransactionMutation,
    useDeleteTransactionMutation
} = apiSlice;
 */
export default apiSlice;
