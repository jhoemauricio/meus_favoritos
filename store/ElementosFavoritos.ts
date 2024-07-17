import { defineStore } from "pinia";
import { Drawer } from "flowbite";


export const elementos = defineStore('elementosFavoritos', {

    // states dos elementos favoritos
    state: () => ({

        // inicia com o valor null ou pode ser de tipo Drawer ou null
        sideBar: null as Drawer | null,
        drawSide: null as Drawer | null,
        // inicia com o valor null ou pode ser do tipo HTMLElement ou null
        element: null as HTMLElement | null

    }),

    getters: {
        // exibe a barra lateral
        exibirBarraLateral(state) {
            // esconde o drawside
            state.drawSide?.hide();
            // exibe o sidebar
            state.sideBar?.show();
        },

        //exibe o drawside
        exibirDrawSide(state){
            // esconde o sidebar
            state.sideBar?.hide();
            // remove a classe hidden do element que é atribuido
            state.element?.classList.remove('hidden');
            // exibe o drawside
            state.drawSide?.show();
        },

        //fecha o drawside
        fecharDrawSide(state) {
            // adiciona a classe hidden ao elemento
             state.element?.classList.add('hidden');
             // esconde o drawside
             state.drawSide?.hide();
        }
    },

    actions: {

        // recebe um HTMLElemento
        async barraLateral(elementoSideBar: HTMLElement | null) {
            try {
                // se elemento existir
                if (elementoSideBar) {
                    // Criação de uma nova instância de Drawer
                    const drawerSideBar = new Drawer(elementoSideBar);
                    // armazena na propriedade drawside do state
                    this.sideBar = drawerSideBar;
                 
                }
            } catch (error) {
                console.log(error);
            }

        },

        async drawSideDown(elementoDrawer: HTMLElement | null) {
            try {
                if (elementoDrawer) {
                 
                  this.element = elementoDrawer;
                    //Criação de uma nova instância de Drawer
                    const drawerDown = new Drawer(elementoDrawer);
                    //armazena na propriedade drawside do state
                    this.drawSide = drawerDown;
                  
                }
            } catch (error) {
                console.log(error);
            }

        }

    }
});
