import { defineStore } from 'pinia';

export const useImageStore = defineStore('imageStore', {
    state: () => ({
        imageSrc: {},
        imageLoaded: {}
    }),
    actions: {
        setImageSrc(quoteId, src) {
            this.imageSrc[quoteId] = src;
        },
        clearImageSrc(quoteId) {
            delete this.imageSrc[quoteId];
        },
        
        setImageLoaded(quoteId, src) {
            this.imageLoaded[quoteId] = src;
        }
    }
});