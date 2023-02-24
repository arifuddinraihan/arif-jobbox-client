import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  // console.log(job)
  const { _id, applicants, position, companyName, location, employmentType } =
    job || {};
  const { pathname } = useLocation()
  // console.log(pathname)
  return (
    <div
      key={_id}
      className='border border-gray-300 shadow-xl p-5 rounded-2xl text-primary'
    >
      <div className='flex justify-between  text-primary'>
        <div>
          <p className='text-xl'>{position}</p>
          <small className='text-primary/70 '>
            by{" "}
            <span className='font-semibold hover:text-primary cursor-pointer hover:underline transition-all'>
              {companyName}
            </span>
          </small>
        </div>
        <p>{location}</p>
      </div>
      <div className='flex justify-between items-center mt-5'>
        <div className="flex flex-col gap-1">
          <p>Job Type : <br /> {employmentType}</p>
          {
            pathname === "/dashboard/posted-Jobs-List" &&
            <button onClick={() => navigate(`/dashboard/posted-Jobs-List/${_id}`)} className="hover:underline">Applicants : {applicants.length}</button>
          }
        </div>
        <div className="flex gap-5">
          {
            pathname === "/dashboard/applied-jobs" &&
            <button className='btn'>
              See Chat
            </button>
          }
          <button className='btn' onClick={() => navigate(`/job-details/${_id}`)}>
            Details
          </button>
          {
            pathname === "/dashboard/posted-Jobs-List" &&
            <button className='btn'>
              Close Job
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default JobCard;
