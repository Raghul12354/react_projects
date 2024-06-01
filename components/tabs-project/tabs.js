import Header from "./head";
import Loading from "../tour-project/loading";
import { useEffect, useState } from "react";
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'

const tabs = () => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true);

    {/*we can give the value zero in state(value,setValue) or else in variable also.(dummy) 
       giving the value 0 will display the first item in the data. */}
    // const dummy = 0;
    const [value, setValue] = useState(0)

    const FetchUrl = async () => { //fetching using async function
        const response = await fetch(url);  // fetching the url
        const newFetch = await response.json(); // converting the url into json
        setJobs(newFetch); // now the jobs(state) value has the fetched Url.
        setLoading(false);
    }
    useEffect(() => {
        FetchUrl()
    }, [])
    if (loading) {
        return <Loading />
    }
    const { company, title, duties, dates } = jobs[value]; //value = 0 coz in the state we gave the value of 0 so 0 = first item of data.
    return (
        <div className="h-screen w-full bg-grey">
            <Header />
            <div>
                <div className='flex flex-row ml-[15%] mt-12'>

                    {/*buttons */}

                    <div className='flex flex-col mr-[8%]'>
                        {jobs.map((item, index) => {
                            return (
                                <button key={item.id}
                                    onClick={() => setValue(index)}
                                    className=' text-xl uppercase my-2 tracking-wide border-l-2 pl-12 hover:text-blue hover:border-blue duration-[.3s]'>
                                    {item.company}
                                </button>
                            )
                        })}
                    </div>

                    {/* info */}
                    
                    <div className=''>
                        <h2 className='text-3xl font-normal tracking-wider uppercase my-3'>{title}</h2>
                        <h3 className='text-lg font-bold bg-gray-200 text-gray-500 w-fit rounded px-4 py-1 uppercase mb-3'>{company}</h3>
                        <h4 className='text-lightGrey font-normal capitalize tracking-widest mb-5'>{dates}</h4>
                        {duties.map((duty, index) => {
                            return (
                                <div key={index} className='flex items-center mb-5'>
                                    <FaAngleDoubleRight className='text-blue mr-8' />
                                    <p className='text-gray-600 w-[80%]'>{duty}</p>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <div className='flex justify-center items-center mt-[4%]'>
                    <button className='bg-blue text-white py-1 px-10 text-base font-medium rounded uppercase hover:bg-cyan-300 hover:text-black duration-[.3s]'>More Info</button>
                </div>
            </div>
        </div>
    )
};

export default tabs;