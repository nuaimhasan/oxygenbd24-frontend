import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./userSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginInfo) => ({
        url: "/admin/login",
        method: "POST",
        body: loginInfo,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          localStorage.setItem("extremenetbd_jwt", result?.data?.token);

          dispatch(
            userLoggedIn({
              token: result?.data?.token,
              data: result?.data,
            })
          );
        } catch (error) {
          // Do not any thing , handel error from ui
        }
      },
    }),

    getAdmins: builder.query({
      query: () => ({
        url: "/admin/all",
        method: "GET",
      }),
      providesTags: ["admin"],
    }),

    getAdminById: builder.query({
      query: (id) => ({
        url: `/admin/${id}`,
        method: "GET",
      }),
      providesTags: ["admin"],
    }),

    deleteAdmin: builder.mutation({
      query: (id) => ({
        url: `/admin/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["admin"],
    }),

    addAdministrator: builder.mutation({
      query: (info) => ({
        url: `/admin/add`,
        method: "POST",
        body: info,
      }),
      invalidatesTags: ["admin"],
    }),
  }),
});

export const {
  useLoginMutation,
  useGetAdminsQuery,
  useDeleteAdminMutation,
  useAddAdministratorMutation,
  useGetAdminByIdQuery,
} = userApi;
