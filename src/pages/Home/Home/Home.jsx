import Banner from "../Bnner/Banner";
import Category from "../Category/Category";
import FeturedItem from "../FeturedItem/FeturedItem";
import PopulerManu from "../PopulerMenu/PopulerManu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
                <Banner></Banner>
                <Category></Category>
                <PopulerManu></PopulerManu>
                <FeturedItem></FeturedItem>
                <Testimonial></Testimonial>
        </div>
    );
};

export default Home;