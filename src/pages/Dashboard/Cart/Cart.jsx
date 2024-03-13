import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hook/useCart";
import Swal from "sweetalert2";
import useAxiosSequre from "../../../hook/useAxiosSequre";

const Cart = () => {
   
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => {
        return total + item.price;
    }, 0)
    const axiosSequre = useAxiosSequre();
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSequre.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="flex justify-evenly items-center">
                <h1>TOTAL BOOKINGS:{cart.length}</h1>
                <h1>TOTAL PRICE :{totalPrice}</h1>
                <button className="btn btn-active btn-ghost">Play</button>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>{item.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-ghost text-xl text-red-500 btn-xs">
                                            <FaTrashAlt></FaTrashAlt></button>
                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Cart;