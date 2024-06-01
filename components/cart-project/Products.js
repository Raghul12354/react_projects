import React from 'react'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import Data from './Cart-data'
import { useGlobalContext } from './context'

const Products = () => {
    const { cart, total, clearCart, remove, increase, decrease, toggleAmount } = useGlobalContext()
    if (cart.length === 0) {
        return (
            <div className='flex justify-center items-center flex-col'>
                <h1 className='flex justify-center text-5xl tracking-wide font-bold uppercase mt-16'>your bag</h1>
                <h4 className='mt-8 text-base text-gray-500 font-normal tracking-wider capitalize'>is currently empty</h4>
            </div>
        )
    }
    return (
        <section className='mt-8'>
            {Data.map((item) => {
                const { id, title, img, amount, price } = item;
                return (
                    <div key={id} className='flex justify-around my-8'>
                        <div className='flex justify-center'>
                            <img className='w-[90px] h-[90px]' src={img} alt={title} />
                            <div className='ml-6'>
                                <h2 className='capitalize text-base font-medium'>{title}</h2>
                                <h5 className='font-semibold text-gray-500 mb-3'>{price}</h5>
                                <button onClick={() => { remove(id) }} className='text-base font-normal text-cyan-400 hover:text-cyan-200 tracking-widest duration-[.3s]'>remove</button>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <button className='text-cyan-600 text-3xl hover:text-cyan-200 duration-[.2s]'>
                                <MdOutlineKeyboardArrowUp />
                            </button>
                            <p className='text-blue font-semibold text-xl'>{amount}</p>
                            <button className='text-cyan-600 text-3xl hover:text-cyan-200 duration-[.2s]'>
                                <MdOutlineKeyboardArrowDown />
                            </button>
                        </div>
                    </div>
                )
            })}
            <footer className='pb-12'>
                <hr className='bg-gray-500 border-1 font-semibold mt-16' />
                <div className='flex justify-around my-6'>
                    <h3 className='capitalize text-xl font-medium tracking-wider'>total</h3>
                    <p className='text-xl font-medium tracking-wide -mr-14'>${total}</p>
                </div>
                <div className='flex justify-center '>
                    <button onClick={clearCart} className='bg-transparent rounded-md text-red-700 text-base font-bold uppercase tracking-[3px] border-2 border-red-700 py-1 px-8 hover:bg-red-400 duration-[.3s] hover:border-red-400'>clear cart </button>
                </div>
            </footer>
        </section>
    )
}

export default Products;
