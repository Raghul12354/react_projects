import { useState } from "react";
import Btn from "./btn";
import BtnNext from "./btnNext";
import reviews from "./data";

const section = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = reviews[index];

    const checkNumber = (number) => {
        if (number > reviews.length - 1) {
            return 0;
        }
        if (number < 0) {
            return reviews.length - 1;
        }
        return number;
    };

    const next = () => {
        setIndex((item) => {
            let newIndex = item + 1;
            return checkNumber(newIndex);
        })
    }
    const prev = () => {
        setIndex((item) => {
            let newIndex = item - 1;
            return checkNumber(newIndex);
        })
    }
    const randoms = () => {
        let randomNumber = Math.floor(Math.random() * reviews.length); // wrote the logic here
        if (randomNumber === index) {
            randomNumber = index + 1; // if the logic === index (state value) then return index + 1
        }
        setIndex(checkNumber(randomNumber));
    }
    return (
        <div className="grid place-items-center px-8">
            <div className="bg-white box-border shadow-md w-full sm:w-[550px] min-h-[400px] rounded-md my-6 px-8 py-5">
                <div className="flex flex-col items-center justify-center">
                    <img className="rounded-full h-[100px] w-[100px] md:h-[150px] md:w-[150px] object-cover" src={image} alt={name} />
                    {/* <h2 className="text-lg font-medium capitalize mt-2">{name}</h2> */}
                    <h4 className="text-blue text-lg md:text-base font-semibold capitalize tracking-wider mt-2">{job}</h4>
                    <p className="text-center text-sm md:text-base text-gray-500 mb-3 w-[85%] text-balance">{text}</p>
                    <div className=' flex flex-row items-center justify-center mx-auto'>
                        <button onClick={prev} className='mx-4 text-blue text-2xl'>
                            <Btn />
                        </button>
                        <button onClick={next} className='mx-4 text-blue text-2xl'>
                            <BtnNext />
                        </button>
                    </div>
                    <button onClick={randoms} className="px-8 py-1 bg-teal-100 text-lg font-medium text-blue mt-7 rounded-xl">Surprise</button>
                </div>
            </div>
        </div>
    )
};

export default section;