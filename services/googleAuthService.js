import { googleSdkLoaded } from "vue3-google-login";
import axios from '../plugins/axios'

const $axios = axios().provide.axios

export class GoogleAuthService {
    constructor() {
        const config = useRuntimeConfig();
        this.clientId = config.public.GOOGLE_CLIENT_ID;
    }
    
    /*
    * Esta funcion se encarga de validar el token de acceso atraves de la api
    * */
    async verifyGoogleToken(token) {
        let res = await $axios.post('/auth/google/login',{
            token:token
        })
        return res
    }
    
    /*
    * Esta funcion hace uso del SDK de Google para solicitar un token de acceso para posteriormente enviarlo a la api y validarlo
    * */
    login(handleLogin) {
        googleSdkLoaded((google) => {
            const tokenClient = google.accounts.oauth2.initTokenClient({
                client_id: this.clientId,
                scope: 'profile email https://www.googleapis.com/auth/drive',
                callback: (response) => {
                    handleLogin(response);
                },
            });
            tokenClient.requestAccessToken(); // Solicita el token de acceso
        });
    }
    
    logout = (gToken) => {
        googleSdkLoaded((google) => {
            // Desactiva la selección automática de cuentas de usuario
            google.accounts.id.disableAutoSelect();
            
            // Obtiene el token de acceso desde tu almacenamiento (por ejemplo, Vuex, Pinia, localStorage)
            const accessToken = "TU_TOKEN_DE_ACCESO_AQUI";
            
            // Revoca el acceso del token de acceso
            google.accounts.oauth2.revoke(gToken);
        });
    };
}