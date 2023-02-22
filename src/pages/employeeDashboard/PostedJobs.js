import React from "react";
import { useSelector } from "react-redux";
import JobCard from "../../components/reusable/JobCard";
import Loading from "../../components/reusable/Loading";
import { useGetPostedJobsQuery } from "../../app/features/job/jobApi";

const PostedJobs = () => {
    const {
        user: { companyName },
    } = useSelector((state) => state.auth);
    const { data, isLoading } = useGetPostedJobsQuery(companyName);
    console.log(data?.data);
    if (isLoading) {
        return <Loading />;
    }
    
    return (
        <div>
            <h1 className='text-xl py-5'>Posted jobs</h1>
            <div className='grid grid-cols-2 gap-5 pb-5'>
                {data?.data?.map((job, i) => (
                    <JobCard job={job} key={i} />
                ))}
            </div>
        </div>
    );
};

export default PostedJobs;
