import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/Authprovider";
const SocialLogin = () => {
    const { googleLogin} = useContext(AuthContext);
    const handleSocialLogin = () =>{
        googleLogin()
        .then(result =>{
            console.log(result.user)
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