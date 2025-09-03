import { Parallax } from 'react-parallax';


const Cover = ({ img ,title }) => {
    return (
        <div className=''>
            <Parallax
                blur={{ min: -30, max: 30 }}
                bgImage={img}
                bgImageAlt="the menu"
                strength={-200}
            >
                <div className="hero min-h-[700px]  " >
                    {/* <div className="hero-overlay"></div> */}
                    <div className="hero-content bg-black/30  text-neutral-content text-center">
                        <div className=" uppercase px-48  py-20">
                            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                            <p className="mb-5 max-w-2xl">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                {/* <div style={{ height: '200px' }} /> */}
            </Parallax>

        </div>
    );
};

export default Cover;