import { apiSlice } from "../api/apiSlice";

export const rentOrderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllRentOrders: builder.query({
      query: (query) => ({
        url: "/rentOrder/all",
        method: "GET",
        params: query,
      }),
      providesTags: ["rentOrder"],
    }),

    getRentOrderById: builder.query({
      query: (id) => ({
        url: `/rentOrder/${id}`,
      }),
      providesTags: ["rentOrder"],
    }),

    addRentOrder: builder.mutation({
      query: (rentInfo) => ({
        url: `/rentOrder/add`,
        method: "POST",
        body: rentInfo,
      }),
      invalidatesTags: ["rentOrder"],
    }),

    deleteRentOrder: builder.mutation({
      query: (id) => ({
        url: `/rentOrder/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["rentOrder"],
    }),
  }),
});

export const {
  useGetAllRentOrdersQuery,
  useAddRentOrderMutation,
  useGetRentOrderByIdQuery,
  useDeleteRentOrderMutation,
} = rentOrderApi;
