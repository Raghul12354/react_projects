import React from 'react';

function Navs({ fetch }) {
    return (
        <div className='flex flex-row'>
            {fetch.map((item) => {
                const { id, text, url } = item;
                return (
                    <ul key={id}>
                        <li className='text-lg capitalize px-2 tracking-widest font-normal hover:text-blue duration-[.1]'><a href={url}>{text}</a></li>
                    </ul>
                )
            })}

        </div>
    )
}

export default Navs;
