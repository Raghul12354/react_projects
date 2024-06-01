import React from 'react'

const CockTails = ({ id, image, info, glass, name }) => {
    return (
        <div>
            <h2 className='flex justify-center font-medium text-4xl tracking-widest mb-16'>Cocktails</h2>
            <div className='grid grid-cols-3 gap-y-16 place-items-center pb-16'>

                <div key={id} className='bg-white shadow-md w-[63%]'>
                    <img className='h-[20rem] rounded-sm object-cover w-fit' src={image} alt="" />
                    <div className='p-6'>
                        <h1 className='text-3xl capitalize font-semibold mb-2'>{name}</h1>
                        <h4 className='capitalize font-medium mb-1'>{glass}</h4>
                        <h5 className='capitalize text-gray-400 mb-1'>{info}</h5>
                        <button className='bg-green-800 text-lg capitalize py-1 px-4 rounded-md'>details</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CockTails;
