import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";
import MenuItem from "../shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            })
    }, [])
    console.log(menu);
    return (
        <div className="container mx-auto">
            <SectionTitle heading={'from our menu'} subHeading={'Check it out'} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    menu.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default PopularMenu;