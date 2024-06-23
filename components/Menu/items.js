const Item = ({ items }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10 pb-8 px-6 md:px-20 xl:px-40">
            {items.map((MenuItem) => {
                const { id, title, price, img, desc } = MenuItem;
                return (
                    <div key={id} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <img className="min-h-[175px] border-4 border-gold rounded-md w-full object-cover object-center order-2 lg:order-1" src={img} alt={title} />
                        <div className="order-1 lg:order-2 mb-5">
                            <div className="flex flex-row my-5 justify-between border-dashed border-b-2 border-b-gray-500">
                                <h3 className="font-medium text-lg capitalize tracking-wide">{title}</h3>
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