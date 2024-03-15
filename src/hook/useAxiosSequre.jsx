import axios from "axios";

export const AxiosSequre = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSequre = () => {
    // request interceptor to add authorization header for every secure call to the api
    AxiosSequre.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        console.log('request stopped by interceptor', token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error);
    })

     // intercepts 401 and 403 status
      AxiosSequre.interceptors.response.use(function(response){
        return response;
      },(error)=>{
        const status = error.response.status;
        console.log('status error in the interceptor', status)
        return Promise.reject(error);
      })
    return AxiosSequre;
};

export default useAxiosSequre;