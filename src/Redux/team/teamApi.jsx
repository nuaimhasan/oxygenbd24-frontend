import { apiSlice } from "../api/apiSlice";

export const teamApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOurTeams: builder.query({
      query: () => ({
        url: "/team",
      }),
      providesTags: ["team"],
    }),
    updateOurTeam: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/team/update/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["team"],
    }),
    createOurTeam: builder.mutation({
      query: (formData) => ({
        url: `/team/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["team"],
    }),
  }),
});

export const {
  useGetOurTeamsQuery,
  useUpdateOurTeamMutation,
  useCreateOurTeamMutation,
} = teamApi;
