import React from 'react'

const HeadNav = () => {
    return (
        <div className='flex justify-between bg-white py-5 w-full shadow-xl px-[15%]'>
            <img className='w-[220px]' src="https://react-projects-15-cocktails.netlify.app/static/media/logo.9a3d2645.svg" alt="" />
            <ul className='flex'>
                <li><a className='capitalize text-xl mx-4' href="">home</a></li>
                <li><a className='capitalize text-xl mx-4' href="">about</a></li>
            </ul>
        </div>
    )
};

export default HeadNav;
