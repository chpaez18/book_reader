import { defineStore } from 'pinia'
import axios from '../plugins/axios'

const $axios = axios().provide.axios

export const useUserStore = defineStore('user', {

    state: () => ({
      data:'',
      token: '',
      rol: '',
    }),

    actions: {

      //Api functions
      //--------------------------------------------------------------------------------------------------------
        async getGoogleUrl() {
          let res = await $axios.get('/auth/get-google-login-url')
          return res.data.url
        },

        async login(code) {
          let res = await $axios.post('/auth/google/callback',{
            code:code
          })
          return res
        },

        async getUserInfo(token = false) {
          if (!token) { token = this.$state.token}
          let res = await $axios.get('/users/get-info', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
            this.setUserRol(res.data.data.rol)
          return res.data
        },

        async logout(token) {
          let res = await $axios.post('/logout', {},{
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          return true
        },

        async getUserBookInfo(token = false) {
          if (!token) { token = this.$state.token}
          let res = await $axios.get('/book/info',{
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
          return res.data.data
        },
        
        async saveAnecdote(data, token = false) {
            if (!token) {
                token = this.$state.token;
            }
            
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };
            
            let res = await $axios.post('/book/save-anecdote', data, config);
            return res.data.data;
        },
        
        async changeCodeStatus(email, token = false) {
            if (!token) {
                token = this.$state.token;
            }
            
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };
            
            let res = await $axios.post('/code/change-status', {email:email}, config);
            return res.data.data;
        },
        
        async getCodes(token = false) {
            if (!token) { token = this.$state.token}
            let res = await $axios.get('/code/index',{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return res.data.data
        },
      //--------------------------------------------------------------------------------------------------------

      //Local functions
      //--------------------------------------------------------------------------------------------------------
        setUser(userData) {
          this.$state.data = userData
        },

        setUserToken(token) {
          this.$state.token = token
        },
        
        setUserRol(role) {
          this.$state.rol = role
        },

        getUser() {
          return this.$state.data
        },

        getUserToken() {
          return this.$state.token
        },
        
        getUserRol() {
          return this.$state.rol
        },

        resetUser() {
          this.$state.data = ''
          this.$state.token = ''
          this.$state.rol = ''
        }
      //--------------------------------------------------------------------------------------------------------
    },
    persist: true
  })