import React, { useState } from 'react'
import List from './list';
import data from './data'

function birthday() {
    const [people, setpeople] = useState(data);
    return (
        <div className='w-full h-screen bg-pink'>
            <div className='flex justify-center items-center w-full h-full'>
                <div className=' bg-white flex flex-col justify-center items-center p-8 rounded'>
                    <h3 className='text-left capitalize text-2xl mb-8 font-normal'>{people.length} birthdays today</h3>
                    <List items={people} />
                    <button onClick={() => setpeople([])} className='capitalize bg-pink text-white text-xl tracking-[2px] px-20 py-2 mt-10'>clear all</button>
                </div>
            </div>
        </div>
    )
}

export default birthday
