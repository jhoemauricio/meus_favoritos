
import { defineStore } from 'pinia';
import type { User } from '../types/user';
import type { UserState } from '../types/user'


export const useUserStore = defineStore('usuario', {

    state: (): UserState => ({
        users: [],

    }),

    getters: {
        userList(state): User[] {
            return state.users;
        }
    },

    actions: {
        async fetchUsers() {
            try {

                const response = ref();
                //o $fetch foi usado porque nao precisa ser reativo no componente quando for chamado
                const data = await $fetch<User[]>('/dadosUser.json');
                //Verifica se data não é nullo, undefined antes de atribuir ao this.users
                if (data) {

                    this.users = data;

                } else {
                    //caso seja igual undefined, null atraibui um array vazio
                    this.users = [];
                }

            }
            catch (error) {
                console.error('Erro ao buscar usuários:', error);
            }

        }


    }
});
