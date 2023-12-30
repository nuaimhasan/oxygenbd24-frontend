import { apiSlice } from "../api/apiSlice";

export const ourMissionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOurMissions: builder.query({
      query: () => ({
        url: "/our-mission",
      }),
      providesTags: ["our-mission"],
    }),
    updateOurMission: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/our-mission/update/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["our-mission"],
    }),
    createOurMission: builder.mutation({
      query: (formData) => ({
        url: `/our-mission/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["our-mission"],
    }),
  }),
});

export const {
  useGetOurMissionsQuery,
  useCreateOurMissionMutation,
  useUpdateOurMissionMutation,
} = ourMissionApi;
