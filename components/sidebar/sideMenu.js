import { FaTimes } from "react-icons/fa";
import { links, social } from "./dataSide";

const SideMenu = ({ open, setopen }) => {
    return (
        <div className={`${open ? "left-0" : "-left-full"} bg-white h-full w-full md:w-[400px] py-5 px-6 cursor-pointer top-0 fixed duration-[.4s] z-10`}>
            {/* Heading */}
            <div className="flex flex-row justify-between items-center mb-[15%]">
                <img className="object-cover w-[160px] md:w-[200px] mr-8" src="https://react-projects-11-navbar.netlify.app/static/media/logo.2bb7da65.svg" alt="Logo" />
                <FaTimes className="text-red-700 text-3xl mr-2" onClick={() => setopen(!open)} />
            </div>
            {/* Links */}
            {
                links.map((item) => {
                    const { url, icon, text } = item;
                    return (
                        <ul className="py-1 hover:bg-slate-100 duration-[.4s]">
                            <li className="flex items-center text-xl capitalize my-3 text-gray-700 ">
                                <a className="text-gray-500 text-2xl mr-6" href={url}>{icon}</a>
                                {text}</li>
                        </ul>
                    )
                })
            }
            {/* Icons */}
            <div className='flex pb-8 justify-center items-center mt-[70%]'>
                {social.map((val) => {
                    const { id, url, icon } = val;
                    return (
                        <ul className="" key={id}>
                            <li className='text-3xl text-blue hover:bg-none mx-2'><a href={url}>{icon}</a></li>
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}
export default SideMenu;