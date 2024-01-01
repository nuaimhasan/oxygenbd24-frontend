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
    deleteTeamMember: builder.mutation({
      query: (id) => ({
        url: `/team/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["team"],
    }),
    getOurTeamById: builder.query({
      query: (id) => ({
        url: `/team/${id}`,
      }),
      providesTags: ["team"],
    }),
  }),
});

export const {
  useGetOurTeamsQuery,
  useUpdateOurTeamMutation,
  useCreateOurTeamMutation,
  useDeleteTeamMemberMutation,
  useGetOurTeamByIdQuery,
} = teamApi;
