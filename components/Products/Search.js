import React from 'react'

const Search = () => {
  return (
    <div className='bg-white flex my-20 flex-col mx-auto w-[40%] px-8 py-6 shadow-lg'>
        <h3 className='font-medium text-base capitalize tracking-[2px] mb-6 text-green-800'>Search Your Favorite Cocktail</h3>
        <input className='bg-grey py-2 px-5 rounded-md' type="text" />
    </div>
  )
};

export default Search;
