import { defineStore } from 'pinia';

export const useIndexStore = defineStore('indexStore', {
    state: () => ({
        refreshIndexId: null,
        refreshShareIconsId: null,
        showShareIcons: false,
    }),
    actions: {
        refreshIndex(id) {
            this.refreshIndexId = id;
        },
        resetRefreshIndex() {
            this.refreshIndexId = null;
        },
        refreshShareIcons(id) {
            this.refreshShareIconsId = id;
        },
        resetShareIcons() {
            this.refreshShareIconsId = null;
        },
    },
});