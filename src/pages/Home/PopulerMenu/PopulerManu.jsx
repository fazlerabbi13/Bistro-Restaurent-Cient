import { useEffect, useState } from "react";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopulerManu = () => {
    const [menu] = useMenu()
    const popularMenu = menu.filter(item => item.category === 'popular')
    // const [menu, setManu] = useState([]);
    // useEffect(() =>{
    //     fetch('menu.json')
    //     .then(res =>res.json())
    //     .then(data =>{
    //         const populerItems = data.filter(item =>item.category === 'popular')
    //         setManu(populerItems)})
    // },[])
    return (
        <div className="mb-10">
            <SectionTittle
                subHeading={'From Our Menu'}
                heading={'Populer Items'}
            ></SectionTittle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    popularMenu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopulerManu;