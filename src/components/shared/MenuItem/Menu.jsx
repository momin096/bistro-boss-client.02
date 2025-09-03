import useMenu from "../../../hooks/useMenu";
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertBg from '../../../assets/menu/dessert-bg.jpeg'
import saladBg from '../../../assets/menu/salad-bg.jpg'
import soupBg from '../../../assets/menu/soup-bg.jpg'
import pizzaBg from '../../../assets/menu/pizza-bg.jpg'
import Cover from "../Cover/Cover";
import SectionTitle from "../../SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div >
            <Cover img={menuImg} title={'our menu'} />
            {/* Offered Menu items */}
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"} />
            <MenuCategory items={offered} />

            {/* Dessert Menu items */}

            <MenuCategory items={dessert} title={'Dessert'} coverImg={dessertBg} />


            <MenuCategory  items={salad} title={"Salad"} coverImg={saladBg}/>

            <MenuCategory items={soup} title={"Soup"} coverImg={soupBg} />


            <MenuCategory items={pizza} title={"Pizza"} coverImg={pizzaBg} />

        </div>
    );
};

export default Menu;