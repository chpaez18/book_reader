import axios  from "axios"

export default defineNuxtPlugin((NuxtApp)=>{

    //axios.defaults.withCredentials = true;
    //axios.defaults.baseURL = 'http://localhost/api_book_reader/public/api'
    axios.defaults.baseURL = 'https://3.86.2.156/api'
    return {
        provide: {
            axios: axios
        }
    }
})