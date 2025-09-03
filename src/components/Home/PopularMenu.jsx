import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";
import MenuItem from "../shared/MenuItem/MenuItem";
import useMenu from "../../hooks/useMenu";


const PopularMenu = () => {
    const [menu, loading] = useMenu();
    const popularMenu = menu.filter( item => item.category === 'popular')
    return (
        <div className="container mx-auto my-10">
            <SectionTitle heading={'from our menu'} subHeading={'Check it out'} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    popularMenu.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default PopularMenu;