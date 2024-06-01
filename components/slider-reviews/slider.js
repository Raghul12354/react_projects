// import data from "./slider's-data";
// import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
// import { FaQuoteRight } from 'react-icons/fa';
// import { useEffect, useState } from "react";

// const slider = () => {

//     const [people, setpeople] = useState(data);
//     const [index, setIndex] = useState(0);

//     return (
//         <div className="min-h-screen w-full bg-grey pb-20">
//             {/*Header section */}
//             <div className="flex justify-center mb-[10%]">
//                 <h1 className="text-5xl font-bold text-blacky  tracking-wide capitalize mt-20">
//                     <span className="text-orange-700 mr-4">/</span>
//                     Reviews
//                 </h1>
//             </div>
//             {/* Section */}
//             <div className="flex relative mt-[11%]">
//                 {people.map((person, personIndex) => {
//                     const { id, image, name, title, quote } = person;
//                     let position = 'nextSlide';
//                     if (personIndex === index) {
//                         position = 'activeSlide';
//                     }
//                     if (
//                         personIndex === index - 1 ||
//                         (index === 0 && personIndex === people.length - 1)
//                     ) {
//                         position = 'lastSlide';
//                     }
//                     return (
//                         <div key={id} className={`flex flex-col justify-center items-center my-16 absolute top-0 left-0 w-full h-full ${position}`}>
//                             <img className="rounded-full  h-[150px] w-[150px] object-cover border-4  border-gray-300 mb-4 shadow-sm" src={image} alt="burger" />
//                             <h3 className="text-lg font-medium uppercase tracking-wide text-orange-700">{name}</h3>
//                             <h4 className="text-base font-normal capitalize text-NewGray mb-3">{title}</h4>
//                             {/*buttons */}
//                             <div className="flex justify-between w-[49%] items-center">
//                                 <button className="text-3xl text-white bg-gray-500 p-1 rounded-md hover:bg-orange-700 duration-[.4s]">
//                                     <FiChevronLeft />
//                                 </button>
//                                 <button className="text-3xl text-white bg-gray-500 p-1 rounded-md hover:bg-orange-700 duration-[.4s]">
//                                     <FiChevronRight />
//                                 </button>
//                             </div>
//                             <p className="text-gray-500 text-center text-base mb-5 w-[35%]">{quote}</p>
//                             <FaQuoteRight className="text-blue text-5xl" />
//                         </div>

//                     )

//                 })}
//             </div>
//         </div>
//     )

// };

// export default slider;