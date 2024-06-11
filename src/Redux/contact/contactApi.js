import { apiSlice } from "../api/apiSlice";

export const contactApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => ({
        url: "/contact",
      }),
      providesTags: ["contact"],
    }),

    addContact: builder.mutation({
      query: (formData) => ({
        url: `/contact/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["contact"],
    }),

    updateContact: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/contact/update/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["contact"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useUpdateContactMutation,
  useAddContactMutation,
} = contactApi;
