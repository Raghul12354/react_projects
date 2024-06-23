import React from 'react'
import { FaTimes } from 'react-icons/fa';

function Modal({ isModalOpen, closeModal }) {
    return (
        <div className={`${isModalOpen ? 'z-[-1] invisible' : 'z-10 visible'}`}>
            {/* <div className='bg-red-500 w-full h-full'> */}
            <div className='absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 z-10 bg-white rounded py-16 md:py-[6rem] w-[80%] md:w-[40%] text-center'>
                <h3 className='text-lg md:text-3xl tracking-wider font-semibold capitalize text-blacky'>modal content</h3>
                <button className='absolute top-0 right-0 p-6 text-xl md:text-3xl font-medium text-red-700' onClick={closeModal}>
                    <FaTimes />
                </button>
            </div>
            {/* </div> */}
        </div>
    )
};

export default Modal;
