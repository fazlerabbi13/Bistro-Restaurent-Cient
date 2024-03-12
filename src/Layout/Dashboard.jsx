import { FaAd, FaCalendarCheck, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 bg-orange-600 min-h-screen">
                <ul className="menu">
                    <li><NavLink to='/dashboard/userhoom'>
                       <FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to='/dashboard/cart'>
                        <FaShoppingCart></FaShoppingCart>
                        My Cart</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'>
                       <FaCalendarCheck></FaCalendarCheck> Reservation</NavLink></li>
                    <li><NavLink to='/dashboard/review'>
                   <FaAd></FaAd> Add Review</NavLink></li>
                    <li><NavLink to='/dashboard/bookings'>
                      <FaList></FaList> My Bookings
                        </NavLink></li>
                </ul>
            </div>
            <div className="flex-1 p-10 bg-gray-300">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;