import { defineStore } from 'pinia'
import axios from '../plugins/axios'

const $axios = axios().provide.axios

export const useUserStore = defineStore('user', {
    state: () => ({
        id:'',
        email:'',
        name:'',
    }),
    actions: {
      async login(username, password) {
        /* let res = await $axios.post('/api/login', {
            email:"admin@testing.com",
            password:"clave123"
        }) */
        let res = {
            "responseCode": 200,
            "data": {
              "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiZDdmYThlZDU3NTBjMTk5MjYzN2Q2N2U1ZmE4Mjk1YTI3ZjFlZmFmZWNiZDIwYjRlMjRiZThhNzhkYjE1MmE1M2JlMzkzZTIzMmZiMDkwZmEiLCJpYXQiOjE2ODIyNjk2OTcuMTQyMzg1LCJuYmYiOjE2ODIyNjk2OTcuMTQyMzg4LCJleHAiOjE3MTM4OTIwOTYuNzMyMDUyLCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.tneQClqU4Hvii58zaBU2zgHXZMEdQzwQprARHvLwxE87Si4QwtlDNFVWOqOMmjK1E4z0gHMi7wjTZNflzJYNXTSepC4_Z6HEcxAUFMbVbg1Nl-BYik4QtzLqCbfwKakomLktHP_aVcBhn-UdY-i8mms9i2dlmya28GOyg6Pg2nQlQr7yScpl8nr0OFNg-apoWc9YeLJo9oYdYlRViiPqtlTcVHtRsvsroLmPMNYDPXrFRolf5RIIHEQMR3siwNlY0K0mSh6zP6xXoTNUH09SRX7bo4_1-VyQHfyUZpABq_0R7bZApEcYnhw6D6WtUVVqj_ZpPjytD1gBLqWEg15GmItp9b_9QbWL2wEDfICMa-iGx_OyvfShQxw104VAAm-3B6LX5iYzL-UTdAXN05zAsUFN3zgk74x6ujCVKT18fihuaVhRShnXuVSybztfgzVk4o6Nb7Bb4txe65Yo3SViG26pJQj1kvdk7Q970QcMYhZ4GO51GCfZ6twuPLXGGFFnRzacBbnjQxlw8_zYxgtcCGietyT4Z_ClRMndfNnz0jvtdhR4AtWNbk70B1vbIQHg5EgCYIkBqqsP0lHZXrFCPTyd9cXV1eYkPHdhH5LQkorPZFtg1fHcuC1tUm8mStutN36Q8GN0SbSSnRRQWgAY3az076MvMF9yE9fQHTXLsWE",
              "expiresIn": 31622399,
              "user": {
                  "id": 1,
                  "first_name": "Administrator",
                  "email": "admin@testing.com",
                  "status": 1,
                  "reset_password_token": "",
                  "reset_password_token_created_at": null
              }
            }
        }
        return res
      },

      async logout() {

      },

      setUser(data) {
        this.$state.id = data.user.id
        this.$state.email = data.user.email
        this.$state.name = data.user.first_name
      },

      getUser(){
        return this.$state
      },

      resetUser() {
        this.$state.id = ''
        this.$state.email = ''
        this.$state.name = ''
      }
    },
    persist: true
  })