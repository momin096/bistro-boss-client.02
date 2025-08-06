
const MenuItem = ({ item }) => {
    const { image, price, recipe, name } = item || {};
    return (
        <div className="flex items-center p-5 gap-5">
            <img className="w-32 h-32 rounded-r-full rounded-bl-full object-cover"  src={image} alt="" />
            <div>
                <h3 className="uppercase text-xl">{name} ----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="font-bold text-amber-500 ">${price}</p>
        </div>
    );
};

export default MenuItem;