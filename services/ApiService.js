import axios from 'axios';

class ApiService {
    constructor() {
        this.axios = axios.create({
            baseURL: 'http://localhost/api_book_reader/public/api',
        });
        
        // Agrega aquí cualquier interceptor que necesites
        this.axios.interceptors.request.use(config => {
            const { $userStore } = useNuxtApp()
            let token = $userStore.getUserToken()

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            
            return config;
        }, error => {
            return Promise.reject(error);
        });
        
        this.axios.interceptors.response.use(response => {
            // Manejo de respuesta exitosa
            return response;
        }, error => {
            // Manejo de errores de respuesta
            return Promise.reject(error);
        });
    }
    
    get(url, config = {}) {
        return this.axios.get(url, config);
    }
    
    post(url, data = {}, config = {}) {
        return this.axios.post(url, data, config);
    }
    
    // Puedes agregar aquí más métodos como delete, put, patch, etc.
}


export default ApiService;

