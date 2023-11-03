import axios  from "axios"

export default defineNuxtPlugin((NuxtApp)=>{

    //axios.defaults.withCredentials = true;
    axios.defaults.baseURL = 'http://localhost/api_book_reader/public/api'
    //axios.defaults.baseURL = 'https://apibookreader-production-0149.up.railway.app/api'
    return {
        provide: {
            axios: axios
        }
    }
})