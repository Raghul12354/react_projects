import React, { useState } from 'react'
import data from './text'

function paragraph() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([])
  const prevent = (e) => {
    e.preventDefault()
    let amount = parseInt(count);
    if (count <= 0) { //if the count(the count is the "state" value having 0 in it) is lesser than 0 then return one paragraph 
       amount = 1;
    }
    if (count > 8) {
      amount = 8; 
    }
    setText(data.slice(0, amount));
  }
  return (
    <div className='min-h-screen w-full bg-grey pb-16'>
      <h1 className='text-3xl font-medium pt-[6rem] uppercase tracking-wide text-center'>tired of bored lorem ipsum</h1>
      <form onSubmit={prevent} className='flex justify-center items-center my-8'>
        <h3 className='text-xl font-normal tracking-wider capitalize'>paragraph:</h3>
        <input value={count} onChange={(e) => { setCount(e.target.value) }} type="number" name="number" id="amount" className='text-lg w-16 rounded py-1 mx-2 text-center' />
        <button className='bg-blue font-normal uppercase text-base py-1 px-3 rounded-md'>Generate</button>
      </form>
      {text.map((item, index) => {
        return (
          <p key={index} className='text-gray-600 text-base font-normal mt-8 px-8 lg:w-[40%] text-balance mx-auto text-center'>{item}</p>
        )
      })}

    </div>
  )
}

export default paragraph;
