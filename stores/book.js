import { defineStore } from 'pinia'

export const useBookStore = defineStore('book', {
    
    state: () => ({
        bookInfo: '',
        quotes: []
    }),
    
    actions: {
        
        //Setters
        //--------------------------------------------------------------------------------------------------------
            setBookInfo(bookInfo) {
                this.$state.bookInfo = bookInfo
            },
        
            setQuotes(quotesData) {
                this.$state.quotes = quotesData
            },
        //--------------------------------------------------------------------------------------------------------
        
        //Getters
        //--------------------------------------------------------------------------------------------------------
            getBookInfo() {
                return this.$state.bookInfo
            },
        
            getQuotes() {
                return this.$state.quotes
            },
        
            resetBook() {
                this.$state.bookInfo = ''
                this.$state.quotes = []
            }
        //--------------------------------------------------------------------------------------------------------
    },
    persist: true
})