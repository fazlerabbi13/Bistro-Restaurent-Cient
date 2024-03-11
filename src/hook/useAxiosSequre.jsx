import axios from "axios";

export const AxiosSequre = axios.create({
    baseURL:'http://localhost:5000'
})
const useAxiosSequre = () => {
    return AxiosSequre;
};

export default useAxiosSequre;