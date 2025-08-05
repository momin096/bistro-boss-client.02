import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";


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
        <div>
            <SectionTitle heading={'from our menu'} subHeading={'Check it out'} />
        </div>
    );
};

export default PopularMenu;