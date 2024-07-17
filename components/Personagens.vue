<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useUserStore } from '../store/userStore';

import { useCounterStoreFav } from '../store/favStore'

const fav = useCounterStoreFav();

const usuarios = useUserStore();
const currentPosition = ref(0);

//Lifecycle Hooks
onMounted(() => {
  usuarios.fetchUsers();
});

//Botoes de ir e vir
const prev = () => {
  if (currentPosition.value > 0) {
    currentPosition.value--;
  } else {
    currentPosition.value = usuarios.userList.length - 1;
  }
};

const next = () => {
  if (currentPosition.value < usuarios.userList.length - 1) {
    currentPosition.value++;
  } else {
    currentPosition.value = 0;
  }
};


</script>



<template>

  <div id="carousel" class="relative overflow-hidden" data-carousel="static">
    <!-- Carousel wrapper -->
    <!-- flex: Mantém os itens do carrossel em uma linha.
      duration-700 ease-in-out transition-transform: Adiciona animação suave à transição. -->
    <div class="flex duration-700 ease-in-out transition-transform"
      :style="{ transform: `translateX(${-currentPosition * 100}%)` }">
      <!-- Carousel items -->
      <!-- flex-shrink-0: Garante que os itens não encolham.
          w-full: Cada item do carrossel ocupa a largura total disponível.
          flex justify-center: Centraliza o conteúdo horizontalmente. -->
      <div v-for="usuario in usuarios.userList" :key="usuario.id" class="flex-shrink-0 w-full flex justify-center">
        <!-- A div externa é um contêiner flexível em coluna (flex flex-col), que alinha seus filhos no centro (items-center) e os justifica no centro (justify-center) -->
        <div
          class="flex flex-col items-center justify-center h-48 w-80 sm:h-64 sm:w-96 md:h-80 md:w-112 lg:h-96 lg:w-128">
          <!-- Contêiner da imagem -->
          <div class="flex justify-center">
            <!-- h-20 w-20 object-cover rounded-full: Define as dimensões da imagem, garante que ela cubra a área disponível e a transforma em uma imagem circular. As divs internas que contêm a imagem e o botão têm classes flex justify-center para garantir que o conteúdo seja centralizado horizontalmente. -->
            <img :src="usuario.img_foto"
              class="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 object-cover rounded-full" />
          </div>
          <!-- Contêiner do botão Adicionamos um mt-4 à div do botão para adicionar um espaçamento acima do botão, garantindo que ele fique abaixo da imagem. -->
          <div class="flex justify-center mt-4">
            <button @click="fav.addFav(usuario)" type="button"
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 -me-1 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">

              <!--aqui acessa direto o metodo isFav para verificar se ja esta no array ou nao, caso nao esteja entao o icone fica em branco caso contrario fica preenchido-->
              <svg v-if="!fav.isFav(usuario)" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
              </svg>

              <svg v-else class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
              </svg>


            </button>

          </div>
        </div>

      </div>
    </div>


    <!-- Botões do Carrossel -->
    <button type="button" @click="prev"
      class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-prev>
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-30 group-hover:bg-opacity-50 dark:bg-opacity-60 dark:group-hover:bg-gray-800 dark:bg-gray-300">
        <svg class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>

    <button type="button" @click="next"
      class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-next>
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-30 group-hover:bg-opacity-50 dark:bg-opacity-60 dark:group-hover:bg-gray-800 dark:bg-gray-300">
        <svg class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>

</template>
