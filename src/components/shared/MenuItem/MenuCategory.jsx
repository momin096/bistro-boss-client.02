import Cover from "../Cover/Cover";
import MenuItem from "./MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className="py-5">
            {title && <Cover img={coverImg} title={title} />}
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {
                        items.map(item => <MenuItem key={item._id} item={item} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default MenuCategory;