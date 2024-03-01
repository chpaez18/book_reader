import { useUserStore } from "~/stores/user";
import { useGeneralStore } from "~/stores/general";
import { useBookStore } from "~/stores/book";

export default defineNuxtPlugin((NuxtApp)=>{
    return {
        provide: {
            userStore: useUserStore(),
            generalStore: useGeneralStore(),
            bookStore: useBookStore()
        }
    }
})