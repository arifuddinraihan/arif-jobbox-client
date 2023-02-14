import apiSlice from "../api/apiSlice";
import { getUser } from "./authSlice";

const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/user",
                body: data,
            }),
            async onQueryStrated(data, { dispactch, queryFulfilled }) {
                try {
                    const res = await queryFulfilled;
                    dispactch(getUser(data.email))
                } catch (error) {
                    // Nothing
                }
            },
        }),
    }),
});

export const { useRegisterMutation } = authApi;