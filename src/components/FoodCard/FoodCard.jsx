
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSequre from "../../hook/useAxiosSequre";

const FoodCard = ({ item }) => {
    const { _id, name, image, price, recipe } = item;

    const { user } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const AxiosSequre = useAxiosSequre();
    const handleAddToCart = (item) => {

        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }

            AxiosSequre.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} has been added your cart`,
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login for add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }

        console.log(item);
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className=" btn border-0 border-b-4 btn-outline">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;