<script setup lang="ts">
import {useCounterStoreFav} from '../store/favStore';
import { defineProps } from 'vue';
import type { usuarioObjeto } from '../types/fav';

const userFav = useCounterStoreFav();

const props = defineProps<{
    userObj: usuarioObjeto
}>()


const isOpen = ref(false);

function Toggle(){

    isOpen.value = !isOpen.value;
    console.log(props.userObj);

}

function deletar(){

    userFav.removeFav(props.userObj);
    isOpen.value = false;
}

const container = ref<HTMLElement | null>(null);

//O tipo MouseEvent é usado para representar eventos de mouse, como clique
//: void: Indica que a função não retorna nenhum valor
const handleClickOutSide = (event: MouseEvent): void =>{
    //container.value.contains(event.target) retorna true se o event.target (o elemento que foi clicado) estiver dentro do contêiner, e false caso contrário.
    if(container.value && !container.value.contains(event.target as Node)){
        isOpen.value = false;
    }
}

onMounted(() => {
    document.addEventListener('click',handleClickOutSide);
});


</script>

<template>

        <div class="flex" ref="container">

            <button  @click="Toggle" class="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600" type="button">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                </svg>
            </button>
        </div>
        <div  class="flex">
            <div v-if="isOpen" class=" -ml-16 z-10 absolute  items-center  bg-white divide-gray-100 rounded-lg shadow w-28 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" >
                    <li>
                        <a @click="deletar" href="#" class="block px-8 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remover</a>
                    </li>
                </ul>
            </div>
        </div>

</template>

<style lang="scss" scoped>

</style>