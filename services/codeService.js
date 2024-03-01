
import axios from '../plugins/axios'

const $axios = axios().provide.axios
export class CodeService {

    /*
    * Funcion para obtener el listado de codigos
    * */
    async getCodes() {
        
        const { $userStore } = useNuxtApp()
        let token = $userStore.getUserToken()
        
        try {
            
            let res = await $axios.get('/code/index', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            })
            return res.data.data
            
        } catch (error) {
            throw error;
        }
    }
    
    /*
    * Funcion para generar un nuevo codigo
    * */
    async generateCode(data) {
        
        const { $userStore } = useNuxtApp()
        let token = $userStore.getUserToken()
        
        try {
            
            let res = await $axios.post('/code/generate', data, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            return res.data.data;
            
        } catch (error) {
            throw error;
        }
    }
    
    /*
    * Funcion para validar un codigo
    * */
    async validateCode(code) {
        
        const { $userStore } = useNuxtApp()
        let token = $userStore.getUserToken()
        
        try {
            
            let res = await $axios.post('/code/validate-code', {code:code}, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            return res.data.data;
            
        } catch (error) {
            throw error;
        }
        
    }
    
    /*
    * Funcion para cambiar el status de un codigo
    * */
    async changeCodeStatus(email) {
        
        const { $userStore } = useNuxtApp()
        let token = $userStore.getUserToken()
        
        try {
            
            let res = await $axios.post('/code/change-status', {email:email}, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            return res.data.data;
            
        } catch (error) {
            throw error;
        }
        
    }
    
    /*
    * Funcion para eliminar un codigo
    * */
    async deleteCode(id) {
        
        const { $userStore } = useNuxtApp()
        let token = $userStore.getUserToken()
        
        try {
            
            let res = await $axios.delete('/code/delete/'+id, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            return res.data.data;
            
        } catch (error) {
            throw error;
        }
    }
}