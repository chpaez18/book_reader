import axios  from "axios"

export default defineNuxtPlugin((NuxtApp)=>{

    //axios.defaults.withCredentials = true;
    axios.defaults.baseURL = 'http://api.localtest.me'
    return {
        provide: {
            axios: axios
        }
    }
})