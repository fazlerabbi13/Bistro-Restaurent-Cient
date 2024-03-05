import { useEffect, useState } from "react";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopulerManu = () => {
    const [menu, setManu] = useState([]);
    useEffect(() =>{
        fetch('menu.json')
        .then(res =>res.json())
        .then(data =>{
            const populerItems = data.filter(item =>item.category === 'popular')
            setManu(populerItems)})
    },[])
    return (
        <div className="mb-10">
            <SectionTittle
                subHeading={'From Our Menu'}
                heading={'Populer Items'}
            ></SectionTittle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopulerManu;