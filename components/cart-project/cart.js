import React from 'react'
import { RiShoppingCartFill } from 'react-icons/ri';
import Products from './Products';
import Loading from '../tour-project/loading';
import { useGlobalContext } from './context';

const cart = () => {
    // const { loading } = useGlobalContext()
    // if (loading) {
    //     return (
    //         <div>
    //             <Loading />
    //         </div>
    //     )
    // }

    return (
        <div className='bg-grey w-full min-h-screen'>
            {/* Nav Section */}
            <nav className='bg-blue w-full py-5 flex justify-around items-center'>
                <h3 className='text-white text-4xl font-medium capitalize tracking-[2px]'>useReducer</h3>
                <RiShoppingCartFill className='text-white text-5xl' />
            </nav>
            {/*End of  Nav Section */}
            <h1 className='flex justify-center text-5xl tracking-wide font-bold uppercase mt-16'>your bag</h1>
            <Products />
        </div>
    )
}

export default cart;
