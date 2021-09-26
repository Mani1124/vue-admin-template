import axios from 'axios'
import store from "../store/Store";
import router from "../router/Router";
 const baseURL = 'https://register.dmcscience.ac.in'
/*const baseURL = 'http://localhost:8000'*/
const http=axios.create({
    baseURL,
});
http.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    console.log("error",error)
    if (401 === error.response.status) {
        store.dispatch("signOut");
        router.push({name:'ApplyNow'})
    } else {
        return Promise.reject(error);
    }
});
export default http;
