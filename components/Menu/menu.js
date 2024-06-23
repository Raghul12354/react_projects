import React, { useState } from 'react';
import Heading from './heading';
import data from './menudata';
import Item from './items';
import Categories from './categories';

function menu() {
    const [menus, setmenus] = useState(data);

    const filterItems = (category) => {
        if (category === "all") { // if category is = all(category in data) then return setmenus(data).
            setmenus(data);
            return;
        }
        const NewItems = data.filter((val) => val.category === category // if value is eqaul to category the return NewItems 
        )
        setmenus(NewItems) // the setmenus carries all the items in the array like img price etc.
    }

    return (
        <div className='min-h-full w-full bg-grey'>
            <Heading />
            <Categories filterItems={filterItems} /> {/*sending as props*/}
            <Item items={menus} /> {/*sending as props*/}
        </div>
    )
}

export default menu;
