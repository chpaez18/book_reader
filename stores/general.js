import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
    state: () => ({
        isBackUrl: false,
        isLogged: false,
        type: '',
    }),
    actions: {
      setIsLogged(value) {
        this.$state.isLogged = value
      },
      setType(value) {
        this.$state.type = value
      },
      
      getIsLogged() {
        return this.$state.isLogged
      },
      
      getType() {
        return this.$state.type
      }
    },
    persist: true
  })