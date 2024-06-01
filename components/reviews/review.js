import React, { useState } from 'react'
import Header from './head';
import Section from './section';

function review() {
    return (
        <div className='h-screen w-full bg-grey'>
            <Header />
            <Section />
        </div>
    )
}

export default review;
{/* <div>
                {reviews.map((item) => {
                    return (
                        <Section {...item} />
                    )
                })}
            </div> this code works fine with mapping */}