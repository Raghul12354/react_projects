import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Container = ({ title, info }) => {
    const [showInfo, setshowInfo] = useState();
    return (
        <div className="flex flex-col bg-white shadow-xl rounded my-3 p-6">
            <div className='flex justify-between mr-7 w-full'>
                <h3 className='text-lg font-semibold'>{title}</h3>
                <button onClick={(() => setshowInfo(!showInfo))} className='text-lg font-medium bg-splGrey rounded-full p-2 text-spl h-fit'>
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </div>
            {showInfo && <p className='mt-5 text-gray-500'>{info}</p>}
        </div>
    )
};

export default Container;