import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import { Swiper, SwiperSlide } from 'swiper/react';
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="my-20">
            <SectionTittle
                subHeading={'What Our Client Say'}
                heading={'Testimonials'}
            ></SectionTittle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>

                        <div className="flex flex-col items-center m-24">
                            <Rating
                            
                                style={{maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            /> 
                            <p className="py-5">{review.details}</p>
                            <h3 className="text-4xl text-yellow-500">{review.name}</h3>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;