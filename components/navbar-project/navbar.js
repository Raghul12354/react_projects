import { useState } from "react";
import { links, social } from "./data";
import Icon from "./icon";
import Navs from "./navs";

const Navbar = () => {
    const [fetch, setFetch] = useState(links);
    const [icon, setIcon] = useState(social);
    return (
        <div className="min-h-screen w-full bg-grey">
            <div className="flex flex-row justify-between items-center px-[13%] py-4 bg-white shadow-lg">

                {/* Logo */}
                <div>
                    <img className="object-cover w-[200px]" src="https://react-projects-11-navbar.netlify.app/static/media/logo.2bb7da65.svg" alt="Logo" />
                </div>
                {/* navbar*/}
                <Navs fetch={fetch} />
                {/* icons */}
                <Icon icon={icon} />
            </div>

        </div>
    )
}
export default Navbar;
