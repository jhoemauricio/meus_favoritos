<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { elementos } from '../store/ElementosFavoritos';

// Store de elementos Favoritos
const element = elementos(); 

// botao sidebar
const botaoSideBar = ref<HTMLElement | null>(null);
// elemento barra lateral
const elementoSideBar = ref<HTMLElement | null>(null);

onMounted(() => {

 // element acessa a action barraLateral que passa como parametro o elementoSideBar
  element.barraLateral(elementoSideBar.value);

    if (botaoSideBar.value) {

        botaoSideBar.value.addEventListener('click', () => {
            // exibe a barra lateral
            element.exibirBarraLateral;
           
        });
    }

});

</script>

<template>

    <!--Botão da barra lateral-->
    <button ref="botaoSideBar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-100 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
       
        <svg class="w-6 h-6"  fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
            </path>
        </svg>
    </button>

    <!--Barra Lateral-->
    <aside ref="elementoSideBar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div class="fixed top-0 left-0 z-40 w-56 h-screen p-4 bg-white dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label">
            <div class="flex justify-between items-center">
                <h5 class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
                <Notification/>
            </div>
            <hr class="my-4 border-gray-200 dark:border-gray-600">
            <div class="py-4 overflow-y-auto">
                <ul class="space-y-2 font-medium">
                    <li>
                        <Avatar />

                    </li>
                </ul>
            </div>
        </div>
    </aside>


    <DrawSide />

 

    




</template>
  

