import { apiSlice } from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/product",
      }),
      providesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/product/update-product/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["product"],
    }),
    addProduct: builder.mutation({
      query: (formData) => ({
        url: `/product/add-product`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProductById: builder.mutation({
      query: (id) => ({
        url: `/product/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
      }),
      providesTags: ["product"],
    }),
    getProductBySlug: builder.query({
      query: (slug) => ({
        url: `/product/getbyslug/${slug}`,
      }),
      providesTags: ["product"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useUpdateProductMutation,
  useAddProductMutation,
  useDeleteProductByIdMutation,
  useGetProductByIdQuery,
  useGetProductBySlugQuery,
} = productApi;
