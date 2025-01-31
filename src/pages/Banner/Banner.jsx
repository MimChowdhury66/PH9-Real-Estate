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
                        <div className="hero-overlay bg-opacity-45"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md ">
                                <h1 className="mb-5 text-5xl font-bold animate__animated animate__backInDown">FINDING THE RIGHT TENANT
                                </h1>
                                <p className="mb-5 animate__animated animate__backInDown">Your property is important to you and you don’t want just anyone staying at your place. Property Portal ensures all potential tenants are thoroughly screened before being arranged to meet with you for a final approval and deal signing. Save your time and efforts while your favorite property solutions provider finds the perfect tenants for you.</p>
                                <Link to='/login'><button style={{ backgroundImage: `url(${background})` }} className="btn text-xl">See Details</button></Link>                            </div>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide><div className="hero min-h-screen" style={{ backgroundImage: `url(${banner2})` }}>
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold animate__animated animate__backInDown">FINDING THE RIGHT PROPERTY
                            </h1>
                            <p className="mb-5 animate__animated animate__backInDown">Our website has thousands of listings to go through. With very simple to use search parameters and filters, you can quickly sort through them to find a multitude of properties that match your particular requirements and then contact us to move further on in the process. Alternatively, you can contact us directly to begin the search process with the help of one of our experts.</p>
                            <Link to='/login'><button style={{ backgroundImage: `url(${background})` }} className="btn text-xl ">See Details</button></Link>                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="hero min-h-screen" style={{ backgroundImage: `url(${banner3})` }}>
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold animate__animated animate__backInDown">LEGAL PAPERWORK AND VETTING
                            </h1>
                            <p className="mb-5 animate__animated animate__backInDown">Legal documents can be overwhelming, especially if you have lost track of something. Property Portal's dedicated legal team sorts through all your necessary documents to make sure nothing is out of place. We help with sorting, keeping everything updated, and retrieval of lost papers. Everything is taken care of so you can focus on a stress free transaction.</p>
                            <Link to='/login'><button style={{ backgroundImage: `url(${background})` }} className="btn text-xl">See Details</button></Link>
                        </div>
                    </div>
                </div></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;