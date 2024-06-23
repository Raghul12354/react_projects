import React from 'react'
import Container from './container';
import questions from './qdata';

function question() {
    return (
        <div className='min-h-screen w-full bg-gray-500'>
            <div className='p-6 grid place-items-center'>
                <div className="bg-white rounded-xl min-h-auto grid grid-cols-1 lg:grid-cols-2 p-10 md:p-20 w-full md:w-[60%]">
                    <h1 className='text-3xl font-semibold pt-6'>Questions And Answers About Login</h1>
                    <div className='mt-2'>
                        {questions.map((item) => {
                            return (
                                <Container {...item} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default question;
