import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import coverImg from '../../../assets/menu/banner3.jpg'
import PopulerManu from '../../Home/PopulerMenu/PopulerManu';
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={coverImg} title={"Our menu"}></Cover>
            <PopulerManu></PopulerManu>
            <Cover img={coverImg} title={"Our menu"}></Cover>
            <PopulerManu></PopulerManu>
            <Cover img={coverImg} title={"Our menu"}></Cover>
            <PopulerManu></PopulerManu>
        </div>
    );
};

export default Menu;