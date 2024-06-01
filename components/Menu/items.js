const Item = ({ items }) => {
    return (
        <div className="grid grid-cols-2 place-items-center gap-6 mx-[10%] pb-8">
            {items.map((MenuItem) => {
                const { id, title, price, img, desc } = MenuItem;
                return (
                    <div key={id} className="flex flex-row mx-2">
                        <img className="h-[175px] border-4 border-gold rounded-md w-[45%] object-cover" src={img} alt={title} />
                        <div className="ml-6">
                            <div className="flex flex-row my-5 justify-between border-dashed border-b-2 border-b-gray-500">
                                <h3 className="font-medium text-base capitalize tracking-wide">{title}</h3>
                                <h4 className="font-semibold text-base text-gold">${price}</h4>
                            </div>
                            <p className="text-gray-500 text-sm">{desc}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default Item;