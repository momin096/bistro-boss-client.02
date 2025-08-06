import Category from "../components/Home/Category";
import Featured from "../components/Home/Featured";
import PopularMenu from "../components/Home/PopularMenu";
import Slider from "../components/Slider";

const Home = () => {
    return (
        <div>
            <Slider />
            <Category />
            <PopularMenu />
            <Featured />
        </div>
    );
};

export default Home;