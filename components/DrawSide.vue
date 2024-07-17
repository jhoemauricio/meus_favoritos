<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { elementos } from '~/store/ElementosFavoritos';

// Store de elementos Favoritos
const element = elementos();
// Elemento drawside
const drawSide = ref<HTMLElement | null>(null);
// Elemento fecharDrawer
const fecharDrawer = ref<HTMLElement | null>(null);


onMounted(() => {

    // Carrega a action drawSideDown com o elemento drawside
    element.drawSideDown(drawSide.value);

    if(fecharDrawer.value){

        fecharDrawer.value.addEventListener('click',()=>{
            // Fecha o drowside
            element.fecharDrawSide;
        })

    }

    
})


</script>


<template>
  <!-- Drawer component -->
  <div ref="drawSide" class="h-full w-full hidden fixed z-40  p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 transform-none" tabindex="-1" aria-labelledby="drawer-bottom-label">
    <!-- Botão que fecha o Drawer -->
    <button ref="fecharDrawer" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span class="sr-only">Close menu</span>
    </button> 
    <!-- Conteúdo dos Favoritos -->
  
    <Favoritos  />
 
    
   
  
  </div>
</template>


<style lang="scss" scoped>

</style>