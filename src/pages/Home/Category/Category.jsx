import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionTittle from '../../../components/SectionTittle/SectionTittle';

const Category = () => {
    return (
        <>
            <section>
                <SectionTittle 
                    subHeading={'From 11.00am to 10.00pm'}
                    heading={'order online'}
                ></SectionTittle>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper mb-16"
                >

                    <SwiperSlide>
                        <img src={slider1} alt="" />
                        <h1 className='text-3xl text-white text-center -mt-10'>Salad</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider2} alt="" />
                        <h1 className='text-3xl text-white text-center -mt-10'>Pizza</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider3} alt="" />
                        <h1 className='text-3xl text-white text-center -mt-10'>Soup</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider4} alt="" />
                        <h1 className='text-3xl text-white text-center -mt-10'>Desert</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider5} alt="" />
                        <h1 className='text-3xl text-white text-center -mt-10'>Salad</h1>
                    </SwiperSlide>

                </Swiper>
            </section>
        </>
    );
};

export default Category;