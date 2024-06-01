import React, { useState } from 'react';
import List from './list';
import Alert from './alert';

function grocery() {
    const [name, setname] = useState('')
    const [isEditing, setEditing] = useState(false);
    const [editId, setEditId] = useState(null)
    const [list, setlist] = useState([]);
    // const [alert, setAlert] = useState({show: false, msg: 'hello' , type: 'success'});

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('hello');
        if (!name) {
            //display alert
        }
        if (name && isEditing) {
            //deal with edit
        } else {
            //show alert
            const Newitem = {
                id: new Date().getTime().toString()  //in order to get a unique id we need to cheat by using getTime method. or else we can also install some small libraries
                , title: name } // the title = name state(value)
            setlist([...list, Newitem]);
            setname('');
        }

    }
    //clear btn
    const clearList = () => {
        setlist([]);
    }
    //delete btn 
    const removeItem = (id) => {
        setlist(list.filter((item) => item.id !== id))
    }
    //edit item
    const editItem = (id) => {
        const specificItem = list.find((item) => item.id === id)
        setEditing(true);
        setEditId(id);
        setname(specificItem.title);
    }
    return (
        <div className='min-h-screen w-full bg-grey'>
            <div className='pt-[8%]'>
                <div className='bg-white w-[40%] flex flex-col mx-auto py-3 px-8 rounded-md shadow-lg'>
                    <h2 className='text-3xl text-blacky capitalize text-center font-medium tracking-wide my-4'>grocery bud</h2>
                    <form onSubmit={handleSubmit} className='flex flex-row items-center mb-5'>
                        {/* {alert.show && <Alert {...alert} />} */}
                        {/*whatever the value the input field getting will be stored in the (state) name and to see the result inspect in components(react) */}
                        <input value={name} onChange={(e) => setname(e.target.value)} type="text" placeholder='e.g.eggs' className='text-base grow rounded-l-md rounded-tl-md font-normal px-5 py-1 bg-grey text-gray-500' />
                        {/*if the is Editing is true then display the submit if its false then display edit.... the isEditing showing the result submit is becoz in the state we gave the value false */}
                        <button className='bg-cyan-300 font-normal py-1 px-2 rounded-r-md rounded-tr-md text-black hover:bg-blue hover:text-white duration-[.3s]'>{isEditing ? 'Edit' : 'Submit'}</button> {/*change the false (state value) to true to see the changes */}
                    </form>
                    <List items={list} removeItem={removeItem} editItem={editItem} />
                    <button onClick={clearList} className='text-red-500 tracking-widest capitalize mb-6 text-sm hover:text-red-600 duration-[.3s]'>clear items</button>
                </div>
            </div>

        </div>
    )
}

export default grocery;
