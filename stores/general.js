import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
    state: () => ({
        isLogged: false, //almacena si el usuario esta logueado
        type: '', //almacena el tipo de usuario
        codeValidated: 0
    }),
    actions: {
      
      //Setters
      //--------------------------------------------------------------------------
            setIsLogged(value) {
                this.$state.isLogged = value
            },
            setType(value) {
                this.$state.type = value
            },
            setCodeValidated(value) {
                this.$state.codeValidated = value
            },
      //--------------------------------------------------------------------------
      
      
      //Getters
      //--------------------------------------------------------------------------
          getIsLogged() {
            return this.$state.isLogged
          },
          
          getType() {
            return this.$state.type
          },
          
          getCodeValidated() {
            return this.$state.codeValidated
          },
        
        resetGeneral() {
            this.$state.isLogged = false
            this.$state.type = ''
            this.$state.codeValidated = 0
        }
      //--------------------------------------------------------------------------
    },
    persist: true
  })