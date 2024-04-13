import 'animate.css';
import background from '../../../public/cool-background.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import banner1 from '../../../public/banner-1.jpeg';
import banner2 from '../../../public/banner-2.jpg';
import banner3 from '../../../public/banner-3.jpeg';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className='mt-3'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner1})` }}>
                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md ">
                                <h1 className="mb-5 text-5xl font-bold animate__animated animate__backInDown">Hello there</h1>
                                <p className="mb-5 animate__animated animate__backInDown">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <Link to='/login'><button style={{ backgroundImage: `url(${background})` }} className="btn text-xl">See Details</button></Link>                            </div>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide><div className="hero min-h-screen" style={{ backgroundImage: `url(${banner2})` }}>
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold animate__animated animate__backInDown">Hello there</h1>
                            <p className="mb-5 animate__animated animate__backInDown">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <Link to='/login'><button style={{ backgroundImage: `url(${background})` }} className="btn text-xl ">See Details</button></Link>                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="hero min-h-screen" style={{ backgroundImage: `url(${banner3})` }}>
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold animate__animated animate__backInDown">Hello there</h1>
                            <p className="mb-5 animate__animated animate__backInDown">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <Link to='/login'><button style={{ backgroundImage: `url(${background})` }} className="btn text-xl">See Details</button></Link>
                        </div>
                    </div>
                </div></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;