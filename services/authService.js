
import { UserService } from '@/services/userService';
import { BookService } from '@/services/bookService';
import { useUserStore } from '@/stores/user';



const userService = new UserService();
export class AuthService {
    constructor() {
        this.loading = false;
    }
    
    get isLoading() {
        return this.loading;
    }
    
    /*
    * Funcion para inicializar los stores principales
    * */
    async init() {

        //Informacion del usuario
            const $userStore = useUserStore();
        
            if (Object.keys($userStore.getUser()).length === 0) {
                //console.log('cargando usuario')
                const userData = await userService.getUserInfo();
                $userStore.setUser(userData)
            }
        //----------------------------------------------------------------------
        
        this.loading = false;
        
    }
}