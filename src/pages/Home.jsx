import Category from "../components/Home/Category";
import Featured from "../components/Home/Featured";
import PopularMenu from "../components/Home/PopularMenu";
import Cover from "../components/shared/Cover/Cover";
import Slider from "../components/Slider";

import menuImg from "../assets/menu/banner3.jpg";
import Particles from "../components/shared/bg-annimation/Particles";

const Home = () => {
  return (
    <div className="relative ">
      {/* Background Particles */}
      <div className="absolute inset-0 -z-10">
        <Particles
          particleColors={["#ffffff", "#ff0000"]}
          particleCount={1000}
          particleSpread={10}
          speed={0.06}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Actual Page Content */}
      <Slider />
      <Category />
      <PopularMenu />
      <Featured />
      <Cover img={menuImg} />
    </div>
  );
};

export default Home;
