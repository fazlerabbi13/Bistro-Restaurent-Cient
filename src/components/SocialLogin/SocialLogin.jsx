import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/Authprovider";
import useAxioxPublic from "../../hook/useAxioxPublic";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
    const { googleLogin} = useContext(AuthContext);
    const axiosPublic = useAxioxPublic();
    const navigate = useNavigate();
    const handleSocialLogin = () =>{
        googleLogin()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email:result.user?.email,
                name:result.user?.displayName,
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data)
               navigate('/')
            })
        })
    }
    return (
        <div>
            <div>
                <button onClick={handleSocialLogin} className="btn">
                    <FaGoogle />
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;