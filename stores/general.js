import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
    state: () => ({
        isBackUrl: false,
        isLogged: false,
        type: '',
        codeValidated: 0
    }),
    actions: {
      setIsLogged(value) {
        this.$state.isLogged = value
      },
      setType(value) {
        this.$state.type = value
      },
      setCodeValidated(value) {
        this.$state.codeValidated = value
      },
      
      getIsLogged() {
        return this.$state.isLogged
      },
      
      getType() {
        return this.$state.type
      },
      
      getCodeValidated() {
        return this.$state.codeValidated
      }
    },
    persist: true
  })