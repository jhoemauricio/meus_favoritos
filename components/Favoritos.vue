<script setup lang="ts">

import {useCounterStoreFav} from '../store/favStore'

   const storeFav = useCounterStoreFav();

</script>



<template>

    <div v-for="fav in storeFav.listFav" :key="fav.id" class="flex p-6 gap-2.5">
      <img class="w-8 h-8 rounded-full" :src="fav.img_foto">
      <div class="flex flex-col w-full p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
        <div class="flex items-center space-x-2 rtl:space-x-reverse">
          <span class="text-sm font-semibold text-gray-900 dark:text-white">{{ fav.nome }}</span>
          <span class="text-sm font-normal text-gray-500 dark:text-gray-400">{{ fav.email }}</span>
        </div>
        <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">"{{ fav.frase }}."</p>
      </div>
      <div class="flex flex-col">
        <Botoes :userObj="fav"/>
      </div>
    </div>

    <!-- Exibe o ícone se a lista estiver vazia -->
    <div v-if="storeFav.listFav.length === 0">
      <div class="flex flex-col items-center justify-center p-6 ">
        <svg class="w-16 h-16 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9"/>
        </svg>
        <p class="text-lg font-medium text-gray-900 dark:text-white">Nenhum dado encontrado</p>
        <p class="text-sm text-gray-500 dark:text-gray-400">Por favor, adicione novos itens para ver aqui</p>
      </div>
    </div>

</template>



<style lang="scss" scoped>

</style>