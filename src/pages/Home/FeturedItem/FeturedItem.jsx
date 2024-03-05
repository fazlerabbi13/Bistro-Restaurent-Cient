import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import fetturedImg from '../../../assets/home/featured.jpg'

import '../../Home/FeturedItem/FeturedItem.css'
const FeturedItem = () => {
    return (
        <div className="feturedBgImage bg-fixed text-white pt-8 mb-10 mt-5">
            
                <SectionTittle
                    subHeading={'check it out'}
                    heading={'FROM OUR MENU'}
                ></SectionTittle>
            
            <div className="md:flex bg-slate-400 bg-opacity-50 justify-center items-center py-16 px-36">
                <div>
                    <img src={fetturedImg} alt="" />
                </div>
                <div className="md:ml-10 space-y-4">
                    <p>March 20, 2023</p>
                    <h3>WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Error voluptate facere, deserunt
                        dolores maiores quod nobis
                        quas quasi. Eaque repellat
                        recusandae ad laudantium
                        tempore consequatur cons
                        equuntur omnis ullam maxime tenetur.</p>
                        <button className="btn border-0 border-b-4 btn-outline text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FeturedItem;