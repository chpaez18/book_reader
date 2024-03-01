
import axios from '../plugins/axios'

const $axios = axios().provide.axios
export class BookService {
    constructor() {
    
    }
    
    /*
    * Funcion para obtener la informacion del libro
    * */
    async getBookInfo() {
        
        const { $userStore } = useNuxtApp()
        let token = $userStore.getUserToken()
        
        try {
            let res = await $axios.get('/book/info', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return res.data.data
        } catch (error) {
            throw error;
        }
    }
    
    async getQuotes() {
        
        const { $userStore } = useNuxtApp()
        let token = $userStore.getUserToken()
        
        try {
            let res = await $axios.get('/book/quotes', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return res.data.data
        } catch (error) {
            throw error;
        }
        
    }
    
    /*
    * Funcion para guardar una anecdota
    * */
    async saveAnecdote(data) {
        
        const { $userStore } = useNuxtApp()
        let token = $userStore.getUserToken()
        
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        
        let res = await $axios.post('/book/save-anecdote', data, config);
        return res.data.data;
    }
}