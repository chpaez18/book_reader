import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {

    state: () => ({
      token: '',
      user: {},
      googleToken: '',
      userBookInfo: {}
    }),

    actions: {

        //Setters
        //--------------------------------------------------------------------------------------------------------
            setUserToken(access_token) {
              this.$state.token = access_token
            },
        
            setUser(userData) {
                this.$state.user = userData
            },
            
            setUserBookInfo(info) {
                this.$state.userBookInfo = info;
            },
        
            setGoogleToken(gToken) {
                this.$state.googleToken = gToken;
            },
        
            
            updateUserBookInfo(updatedAnecdote) {
                const index = this.userBookInfo.findIndex(ubi => ubi.id === updatedAnecdote.id);
                
                if (index !== -1) {
                    // Actualiza el elemento existente
                    this.userBookInfo[index] = { ...this.userBookInfo[index], ...updatedAnecdote };
                } else {
                    // Agrega un nuevo elemento si no existía
                    this.userBookInfo.push(updatedAnecdote);
                }
            },
            
            getUserBookInfoStoreById(id) {
                const record = this.userBookInfo.find(ubi => ubi.quote_id === id);
                return record;
            },
        //--------------------------------------------------------------------------------------------------------
        
        //Getters
        //--------------------------------------------------------------------------------------------------------
            getUserToken() {
                return this.$state.token
            },
    
            getUser() {
                return this.$state.user
            },
        
            getUserBookInfo() {
                return this.$state.userBookInfo;
            },
        
            getGoogleToken() {
                return this.$state.googleToken;
            },
        
            
            resetUser() {
              this.$state.token = ''
              this.$state.googleToken = ''
              this.$state.user = {}
              this.$state.userBookInfo = {}
            }
        //--------------------------------------------------------------------------------------------------------
        
    },
    persist: true
  })