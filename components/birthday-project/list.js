import React from 'react'

const Lists = ({ items }) => {

    return (
        <>
            {items.map((person) => {
                const { name, age, image } = person;
                return (
                    <div className='grid grid-cols-2'>
                        <div className='mx-6'>
                            <img src={image} alt="doli" className='w-20 rounded-full h-20 object-cover mb-1' />
                        </div>
                        <div className='flex flex-col items-center text-center'>
                            <h4 className='text-xl font-semibold capitalize my-1'>{name}</h4>
                            <h5 className='text-base text-gray-600 capitalize'>{age}</h5>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Lists;
