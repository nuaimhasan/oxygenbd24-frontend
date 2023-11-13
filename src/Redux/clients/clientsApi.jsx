import { apiSlice } from "../api/apiSlice";

export const clientsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getClients: builder.query({
      query: () => ({
        url: "/alliance/allAlliances",
      }),
    }),
  }),
});

export const { useGetClientsQuery } = clientsApi;
