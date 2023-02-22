import React from 'react';
import { useParams } from 'react-router-dom';
import { useApplicantsByJobQuery, useJobByIdQuery } from '../../app/features/job/jobApi';
import Loading from '../../components/reusable/Loading';

const ApplicantsPerJob = () => {
    const { id } = useParams();
    // console.log(id)
    // const { data, isLoading, isError } = useJobByIdQuery(id, { pollingInterval: 30000 })
    // const applicants  = data?.data?.applicants;
    // console.log(applicants);
    // const role = "candidate";
    const { data } = useApplicantsByJobQuery(id, { pollingInterval: 10000 })
    console.log(data);
    // console.log(allData?.data?.email);
    // const appliedCandidates = applicants.map((user) => allData?.data.filter((applicant) => applicant.email === user.email))
    // console.log(appliedCandidates);
    // if (isLoading) {
    //     return <Loading />
    // }
    return (
        <div>
            {/* <h1 className='text-center my-5 text-lg'>Applicants On this Job : {data?.data?.applicants.length}</h1> */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Details</th>
                            <th>Instant Contact</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {/* {
                            appliedCandidates.map((
                                { _id,
                                    firstName,
                                    lastName,
                                    gender,
                                    email,
                                    country,
                                    city
                                }) => (
                                <tr key={_id}>
                                    <td className='font-bold'>
                                        {firstName} {" "} {lastName}
                                    </td>
                                    <td>
                                        Zemlak, Daniel and Leannon
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">Instant Chat</button>
                                    </th>
                                </tr>
                            ))
                        } */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApplicantsPerJob;