import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';

function List({ items, removeItem, editItem }) {
    return (
        <div>
            {items.map((item) => {
                const { id, title } = item;
                return (
                    <div key={id} className='flex justify-between items-center mt-6 mb-5 p-1 hover:bg-grey'>
                        <h3 className='text-base text-normal capitalize pl-5'>{title}</h3>
                        <div>
                            <button onClick={() => editItem(id)} className='text-green-500 mx-3'><FaEdit /></button>
                            <button onClick={(() => removeItem(id))} className='text-red-500 mx-1'><FaTrash /></button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default List
