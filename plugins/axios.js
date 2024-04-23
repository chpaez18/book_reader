import axios  from "axios"

export default defineNuxtPlugin((NuxtApp)=>{

    //axios.defaults.withCredentials = true;
    //axios.defaults.baseURL = 'http://localhost/api_book_reader/public/api'
    axios.defaults.baseURL = 'https://apibook.dairewdesign/api'
    return {
        provide: {
            axios: axios
        }
    }
})