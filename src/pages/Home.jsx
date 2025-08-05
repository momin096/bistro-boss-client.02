import Category from "../components/Home/Category";
import PopularMenu from "../components/Home/PopularMenu";
import Slider from "../components/Slider";

const Home = () => {
    return (
        <div>
            <Slider />
            <Category />
            <PopularMenu />
        </div>
    );
};

export default Home;