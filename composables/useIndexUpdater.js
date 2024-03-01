
import { ref } from 'vue';

export const useIndexUpdater = () => {
    
    const refreshId = ref(null);
    
    const updateElement = (id) => {
        refreshId.value = id;

        nextTick(() => {
            const elementToUpdate = document.getElementById(id);
            const elementIcon = document.getElementById('icon-' + id);
            
            if (elementToUpdate) {
                elementToUpdate.classList.add('rayado');
            }
            
            if (elementIcon) {
                elementIcon.style.color = '#6633CC';
            }
            
            // reseteamos el id
            refreshId.value = null;
        });
    };
    
    return { updateElement, refreshId };
};
