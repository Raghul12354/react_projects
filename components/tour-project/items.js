import { useState } from "react";

const items = ({ id, image, name, info, price, removeTour }) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <div className="flex flex-col pb-8">
            <div className="bg-white box-border shadow-md w-[550px] mx-auto rounded-md my-5">
                <div className="flex items-center justify-center flex-col text-center">
                    <img className="h-80 w-full rounded object-cover mx-auto" src={image} alt={name} />
                    <div className="flex flex-row w-full justify-between items-center px-5 capitalize py-6 mb-7">
                        <h2 className="text-lg font-semibold">{name}</h2>
                        <h3 className="text-base font-medium bg-cyan-200 text-cyan-600 px-2">{price}</h3>
                    </div>
                    <p className="text-base text-center text-gray-600 flex justify-center items-center mx-8">{
                        readMore ? info : `${info.substring(0, 250)}...` //if readmore is true then display info but if it not true then display info.substring... and the substring removes the text.
                    }</p>
                    <button className="text-teal-600" onClick={() => setReadMore(!readMore)}> {/* !readMore is Not Operator method this can neither be true or false*/}
                        {readMore ? 'show less' : 'read more'}  {/*this is a Tenary Operator so if readMore is true then return show less but if readMore is false then return read more*/}
                    </button>
                    <button onClick={() => removeTour(id)} className="bg-transparent text-xl text-red-400 capitalize rounded border-2 border-red-500 my-6 px-8 font-medium">Not Interested</button>
                </div>
            </div>
        </div>
    )
};

export default items;