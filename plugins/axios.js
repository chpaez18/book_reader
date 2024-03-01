import axios  from "axios"

export default defineNuxtPlugin((NuxtApp)=>{
    
    const config = useRuntimeConfig();
    this.api_url = config.public.API_URL;
    
    //axios.defaults.withCredentials = true;
    axios.defaults.baseURL = api_url
    //axios.defaults.baseURL = 'https://3.86.2.156/api'
    return {
        provide: {
            axios: axios
        }
    }
})