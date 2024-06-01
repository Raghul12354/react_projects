import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import Modal from './modal';
import SideMenu from './sideMenu'

function SideBar() {
    const [open, setopen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(true);

    const openModal = () => {
        setIsModalOpen(false);
    };
    const closeModal = () => {
        setIsModalOpen(true);
    };

    return (
        <div className='min-h-screen w-full bg-grey'>
            {/* menu icon */}
            <div className='py-4 px-10'>
                <FaBars className='text-blue text-6xl pt-3 animate-bounce' onClick={() => setopen(!open)} />
            </div>
            {/* open menu */}
            <SideMenu open={open} setopen={setopen} />
            {/* modal */}
            <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
            <div className='flex justify-center items-center absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 '>
                <button onClick={openModal} className='tracking-widest text-lg capitalize text-white bg-black py-[2px] px-3 rounded-md hover:bg-transparent border-2 border-black hover:text-black duration-[.3s]'>show modal</button>
            </div>
        </div>
    )
};

export default SideBar;
