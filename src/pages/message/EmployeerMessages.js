import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useChatWithCandidateQuery } from '../../app/features/job/jobApi';
import Loading from '../../components/reusable/Loading';
import { BsArrowRightShort, BsArrowReturnRight } from "react-icons/bs";

const EmployeerMessages = () => {
    const [employeerText, setEmployeerText] = useState("")
    console.log(employeerText);
    const { id } = useParams();
    const { data, isLoading, isError } = useChatWithCandidateQuery(id)
    // console.log(data);
    // console.log(data);
    // console.log(data);
    // console.log(data);
    // console.log(data);
    // console.log(data);
    if (isLoading) {
        return <Loading />
    }

    const { firstName, lastName, email } = data?.data;

    return (
        <div className='ml-8 my-8'>
            <div className='text-center font-bold sticky z-10 top-4 bg-white'>
                <h1>Your chatting with : {firstName}{" "}{lastName}</h1>
                <h1>Email : {email}</h1>
            </div>
            <div className=''>
                <div>
                    <div className='text-primary my-2'>
                        <div className=''>
                            <p className='text-lg font-medium'>Question</p>
                            <small className=''>{firstName}</small>
                            <div className='fixed bottom-0'>
                                <div className='flex gap-3 my-5'>
                                    <input placeholder='Reply'
                                        type='text'
                                        className='w-full'
                                        onBlur={(e) => setEmployeerText(e.target.value)}
                                    />
                                    <button
                                        className='shrink-0 h-14 w-14 bg-primary/10 border border-primary hover:bg-primary rounded-full transition-all  grid place-items-center text-primary hover:text-white'
                                        type='button'

                                    >
                                        <BsArrowRightShort size={30} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* {user.role === "candidate" && <form onSubmit={handleSubmit(handleQuestion)}>
                        <div className='flex gap-3 my-5'>
                            <input
                                placeholder='Ask a question...'
                                type='text'
                                className='w-full'
                                {...register("question")}
                            />
                            <button
                                className='shrink-0 h-14 w-14 bg-primary/10 border border-primary hover:bg-primary rounded-full transition-all  grid place-items-center text-primary hover:text-white'
                                type='submit'
                            >
                                <BsArrowRightShort size={30} />
                            </button>
                        </div>
                    </form>} */}
                </div>
            </div>
        </div>
    );
};

export default EmployeerMessages;