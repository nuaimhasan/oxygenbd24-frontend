import { apiSlice } from "../api/apiSlice";

export const teamApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTeams: builder.query({
      query: () => ({
        url: "/team/allTeamMembers",
      }),
    }),
  }),
});

export const { useGetTeamsQuery } = teamApi;
