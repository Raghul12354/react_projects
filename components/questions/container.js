import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Container = ({ title, info }) => {
    const [showInfo, setshowInfo] = useState();
    return (
        <div className="flex flex-col bg-white shadow-xl rounded my-3 p-6 mx-5">
            <div className='flex flex-row justify-between mr-7'>
                <h3 className='text-lg font-semibold'>{title}</h3>
                    <button onClick={(() => setshowInfo(!showInfo))} className='ml-6 text-lg font-medium bg-splGrey rounded-full p-1 text-spl'>
                        {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </button>
            </div>
            {showInfo && <p>{info}</p>}
        </div>
    )
};

export default Container;