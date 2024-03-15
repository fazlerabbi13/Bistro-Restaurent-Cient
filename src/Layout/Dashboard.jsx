import { FaAd, FaBook, FaCalendar, FaCalendarCheck, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hook/useCart";

const Dashboard = () => {

    const [cart] = useCart();

    const isAdmin = true;

    return (
        <div className="flex">
            <div className="w-64 bg-orange-400 min-h-screen">
                <ul className="menu">
                    {
                        isAdmin ? <>

                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                    <FaUtensils></FaUtensils>
                                    Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList></FaList>
                                    Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaBook></FaBook>
                                    Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                        </>

                            :

                            <>
                                <li><NavLink to='/dashboard/userhoom'>
                                    <FaHome></FaHome> User Home
                                </NavLink></li>
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
                            </>
                    }
                    {/* divider */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/dashboard/userHome">
                            <FaHome></FaHome>
                            User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/history">
                            <FaCalendar></FaCalendar>
                            Not History</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart">
                            <FaShoppingCart></FaShoppingCart>
                            My Cart ({cart.length})</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                            <FaAd></FaAd>
                            Add a Review</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-10 bg-gray-300">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;