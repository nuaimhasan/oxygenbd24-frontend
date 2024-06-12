import { apiSlice } from "../api/apiSlice";

export const rentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllRents: builder.query({
      query: (query) => ({
        url: "/rent/all",
        method: "GET",
        params: query,
      }),
      providesTags: ["rent"],
    }),

    getRentById: builder.query({
      query: (id) => ({
        url: `/rent/${id}`,
      }),
      providesTags: ["rent"],
    }),

    addRent: builder.mutation({
      query: (rentInfo) => ({
        url: `/rent/add`,
        method: "POST",
        body: rentInfo,
      }),
      invalidatesTags: ["rent"],
    }),

    editRent: builder.mutation({
      query: ({ id, rentInfo }) => ({
        url: `/rent/edit/${id}`,
        method: "PATCH",
        body: rentInfo,
      }),
      invalidatesTags: ["rent"],
    }),

    deleteRent: builder.mutation({
      query: (id) => ({
        url: `/rent/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["rent"],
    }),
  }),
});

export const {
  useGetAllRentsQuery,
  useAddRentMutation,
  useGetRentByIdQuery,
  useEditRentMutation,
  useDeleteRentMutation,
} = rentApi;
