import React from 'react';
import { useParams } from 'react-router-dom';
import { useApplicantsByJobQuery, useJobByIdQuery } from '../../app/features/job/jobApi';
import Loading from '../../components/reusable/Loading';

const ApplicantsPerJob = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useApplicantsByJobQuery(id, { pollingInterval: 10000 })
    const appliedCandidates = data?.data;
    console.log(appliedCandidates);
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h1 className='text-center my-5 text-lg'>Applicants On this Job : {appliedCandidates.length}</h1>
            <div className="overflow-x-auto w-full my-8">
                <table className="table table-zebra w-full">
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
                        {/* row */}
                        {
                            appliedCandidates.map((
                                { _id,
                                    firstName,
                                    lastName,
                                    gender,
                                    email,
                                    country,
                                    city
                                }) => (
                                <tr key={_id} className="text-center border border-spacing-4">
                                    <td className='font-bold'>
                                        {firstName} {" "} {lastName}
                                    </td>
                                    <td>
                                        {"Email :"}{" "}{email}
                                        <br />
                                        {"Gender :"}{" "}{gender}
                                        <br />
                                        {"City :"}{" "}{city}
                                        <br />
                                        {"Country :"}{" "}{country}
                                        <br />

                                    </td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">Instant Chat</button>
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApplicantsPerJob;