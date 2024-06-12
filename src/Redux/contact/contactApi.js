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
      query: (contactInfo) => ({
        url: `/contact/add`,
        method: "POST",
        body: contactInfo,
      }),
      invalidatesTags: ["contact"],
    }),

    updateContact: builder.mutation({
      query: ({ id, contactInfo }) => ({
        url: `/contact/update/${id}`,
        method: "PATCH",
        body: contactInfo,
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
