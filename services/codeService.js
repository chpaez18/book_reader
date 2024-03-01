
import axios from '../plugins/axios'

const $axios = axios().provide.axios
export class CodeService {

    /*
    * Funcion para obtener el listado de codigos
    * */
    async getCodes() {
        
        try {
            
            let res = await $axios.get('/code/index')
            return res.data.data
            
        } catch (error) {
            throw error;
        }
    }
    
    /*
    * Funcion para generar un nuevo codigo
    * */
    async generateCode(data) {
        
        try {
            
            let res = await $axios.post('/code/generate', data);
            return res.data.data;
            
        } catch (error) {
            throw error;
        }
    }
    
    /*
    * Funcion para validar un codigo
    * */
    async validateCode(code) {
        
        try {
            
            let res = await $axios.post('/code/validate-code', {code:code});
            return res.data.data;
            
        } catch (error) {
            throw error;
        }
        
    }
    
    /*
    * Funcion para cambiar el status de un codigo
    * */
    async changeCodeStatus(email) {
        
        try {
            
            let res = await $axios.post('/code/change-status', {email:email});
            return res.data.data;
            
        } catch (error) {
            throw error;
        }
        
    }
    
    /*
    * Funcion para eliminar un codigo
    * */
    async deleteCode(id) {
        
        try {
            
            let res = await $axios.delete('/code/delete/'+id);
            return res.data.data;
            
        } catch (error) {
            throw error;
        }
    }
}