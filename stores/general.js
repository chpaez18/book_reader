import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
    state: () => ({
        isBackUrl: false,
        isLogged: false,
    }),
    actions: {
      setIsLogged(value) {
        this.$state.isLogged = value
      }
    },
    persist: true
  })