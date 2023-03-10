import apiSlice from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postJob: builder.mutation({
            query: (data) => ({
                url: '/job',
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Jobs"],
        }),
        jobApply: builder.mutation({
            query: (data) => ({
                url: '/apply',
                method: "PATCH",
                body: data,
            }),
        }),
        question: builder.mutation({
            query: (data) => ({
                url: '/query',
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["Job"],
        }),
        reply: builder.mutation({
            query: (data) => ({
                url: '/reply',
                method: "PATCH",
                body: data,
            }),
            invalidatesTags : ["Job"],
        }),
        getJobs: builder.query({
            query: () => ({
                url: '/jobs',
            }),
            providesTags: ["Jobs"],
        }),
        getAppliedJobs: builder.query({
            query: (email) => ({
                url: `/applied-jobs/${email}`,
            }),
            providesTags: ["Jobs"],
        }),
        getPostedJobs: builder.query({
            query: (companyName) => ({
                url: `/posted-jobs/${companyName}`,
            }),
            providesTags: ["Jobs"],
        }),
        jobById: builder.query({
            query: (id) => ({
                url: `/job/${id}`,
            }),
            providesTags: ["Job"],
        }),
        applicantsByJob: builder.query({
            query: (id) => ({
                url: `/job-applicants/${id}`,
            }),
            providesTags: ["Job"],
        }),
        chatWithCandidate: builder.query({
            query: (id) => ({
                url: `/chat/${id}`,
            }),
        }),
    }),
});

export const {
    usePostJobMutation,
    useGetJobsQuery,
    useJobByIdQuery,
    useJobApplyMutation,
    useGetAppliedJobsQuery,
    useGetPostedJobsQuery,
    useApplicantsByJobQuery,
    useQuestionMutation,
    useReplyMutation,
    useChatWithCandidateQuery,
} = jobApi;