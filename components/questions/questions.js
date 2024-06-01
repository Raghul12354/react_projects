import React from 'react'
import Container from './container';
import questions from './qdata';

function question() {
    return (
        <div className='h-screen w-full bg-purple-900'>
            <div className='pt-28'>
                <div className="bg-white rounded h-auto flex flex-row mx-auto w-[60%] px-6 py-8">
                    <h1 className='text-3xl font-medium w-[30%] pt-6'>Questions And Answers About Login</h1>
                    <div>
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
