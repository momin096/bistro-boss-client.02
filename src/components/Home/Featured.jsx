import SectionTitle from "../SectionTitle";
import featuredImage from '../../assets/home/featured.jpg'
import './featured.css'

const Featured = () => {
    return (
        <div className="featured-bg bg-fixed bg-black/40 bg-blend-darken py-10 md:py-20 px-5">
            <div className="container mx-auto">
                <SectionTitle heading={'from our menu'} subHeading={'Check it out'} />

                <div className="flex flex-col md:flex-row items-center gap-14 justify-center">
                    <div className="flex-1 place-items-end">
                        <img className="w-[500px]" src={featuredImage} alt="" />
                    </div>
                    <div className=" flex-1 ">
                        <h2 className="text-xl uppercase font-medium">March 20, 2023</h2>
                        <h2 className="text-xl uppercase font-medium">WHERE CAN I GET SOME?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;