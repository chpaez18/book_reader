
import axios from '../plugins/axios'

const $axios = axios().provide.axios
export class UserService {
    
    /*
    * Funcion para obtener la informacion del usuario logueado
    *  */
    async getUserInfo() {
        
        const { $userStore } = useNuxtApp()
        let token = $userStore.getUserToken()
        
        try {
            const response = await $axios.get('/users/get-info', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            return response.data.data;
        } catch (error) {
            throw error;
        }
       
    }
    
    /*
    * Funcion para obtener la informacion referente a las estadisticas del libro asociado al usuario
    *  */
    async getUserBookInfo() {
        
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
    
    /*
    * Funcion para desloguear al usuario
    *  */
    async logout() {
        
        const { $userStore } = useNuxtApp()
        let token = $userStore.getUserToken()
        
        try {
            let res = await $axios.post('/logout', {},{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return true
        } catch (error) {
            throw error;
        }
    }
}