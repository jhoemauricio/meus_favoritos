import { defineStore } from 'pinia';
import type { usuarioObjeto } from '../types/fav';
import type { objeto } from '../types/fav'



export const useCounterStoreFav = defineStore('favoritosContador', {

    //espera uma tipagem do tipo Objeto
    state: (): objeto => ({
        //array vazio 
        favoritos: []

    }),

    getters: {
        //exibe a lista com os favoritos
        listFav(state) {
            return state.favoritos;
        }

    },

    actions: {
        //funcao receebe um objeto tipado
        async addFav(user: usuarioObjeto) {

            try {
                //Se usuario nao existe entao add no array
                if (!this.isFav(user)) {
                    //add usuario no array de favoritos
                    this.favoritos.push(user);
                } else {
                    //caso ja exista entao remove
                    this.removeFav(user);
                }
            } catch (error) {
                console.log('erro ao add favorito ' + error)
            }

        },

        //remove um favorito
        async removeFav(user: usuarioObjeto) {
            try{

                if(this.isFav(user)){
                    //procura por um index especifico
                    const indice = this.favoritos.indexOf(user);
                    //passo o index e a quantidade que quer remover
                    this.favoritos.splice(indice,1);
                }

            }catch(error){
                console.log('erro ao remover favorito '+error)
            }
        },

        //funcao que verifica se usuario ja existe
        isFav(user: usuarioObjeto) {
            //o array recebe a funcao some (nomeDafuncao, (lógica))
            return this.favoritos.some(procurarUser => procurarUser.id === user.id)
        },

    },
})