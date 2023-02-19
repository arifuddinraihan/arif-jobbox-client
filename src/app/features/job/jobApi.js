import apiSlice from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postJob: builder.mutation({
            query: (data) => ({
                url: '/job',
                method: "POST",
                body: data,
            }),
            invalidatesTags : ["Jobs"],
        }),
        jobApply: builder.mutation({
            query: (data) => ({
                url: '/apply',
                method: "PATCH",
                body: data,
            }),
        }),
        getJobs: builder.query({
            query: () => ({
                url: '/jobs',
            }),
            providesTags : ["Jobs"],
        }),
        getAppliedJobs: builder.query({
            query: (email) => ({
                url: `/applied-jobs/${email}`,
            }),
            providesTags : ["Jobs"],
        }),
        jobById: builder.query({
            query: (id) => ({
                url: `/job/${id}`,
            }),
            providesTags: ["Jobs"],
        }),
    }),
});

export const { usePostJobMutation , useGetJobsQuery, useJobByIdQuery, useJobApplyMutation, useGetAppliedJobsQuery } = jobApi;