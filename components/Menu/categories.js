import React from 'react'

function categories({ filterItems }) {
    return (
        <div className='flex mb-8 justify-center'>
            <button onClick={(() => filterItems('all'))} className='capitalize mx-1 md:mx-4 text-lg font-normal text-gold py-1 px-3 rounded hover:bg-gold duration-[0.3s] hover:text-white'>all</button>

            <button onClick={(() => filterItems('breakfast'))}
                className='capitalize mx-1 md:mx-4 text-lg font-normal text-gold py-1 px-3 rounded hover:bg-gold duration-[0.3s] hover:text-white'>breakfast</button>

            <button onClick={(() => filterItems('lunch'))}
                className='capitalize mx-1 md:mx-4 text-lg font-normal text-gold py-1 px-3 rounded hover:bg-gold duration-[0.3s] hover:text-white'>lunch</button>

            <button onClick={(() => filterItems('shakes'))}
                className='capitalize mx-1 md:mx-4 text-lg font-normal text-gold py-1 px-3 rounded hover:bg-gold duration-[0.3s] hover:text-white'>shakes</button>
        </div>
    )
}

export default categories
