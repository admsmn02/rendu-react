import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://iim.etherial.fr' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    getProductComments: builder.query({
      query: (productId) => `/products/${productId}/comments`,
    }),
    postProductComment: builder.mutation({
      query: (data) => ({
        url: `/products/${data.productId}/comments`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductCommentsQuery, usePostProductCommentMutation } = api;