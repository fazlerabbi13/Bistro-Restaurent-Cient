import { useQuery } from "@tanstack/react-query";
import useAxiosSequre from "./useAxiosSequre";



const useCart = () => {
    const axiosSequre = useAxiosSequre();

    const {data: cart = []} = useQuery({
        queryKey:['cart'],
        queryFn: async ()=>{
            const res = await axiosSequre.get('/carts')
            return res.data;

        }
    })
    return [cart]
};

export default useCart;