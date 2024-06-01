import React from 'react'

function Icon({ icon }) {
    return (
        <div className='flex flex-row'>
            {icon.map((val) => {
                const {id, url, icon} = val;
                return (
                    <ul key={id}>
                        <li className='text-base text-blue p-2 hover:bg-none'><a href={url}>{icon}</a></li>
                    </ul>
                )
            })}
        </div>
    )
}

export default Icon
