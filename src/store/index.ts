import IProjeto from "@/interfaces/IProjeto";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO } from "./tipo-mutacoes";

interface Estado {
    projetos: IProjeto[]
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
    state: {
        projetos: []
    },
    mutations: {
        [ADICIONA_PROJETO](state, nomeDoProjeto: string){
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            } as IProjeto
            state.projetos.push(projeto);
        },
        [ALTERA_PROJETO](state, projeto: IProjeto){
            const indexProjeto = state.projetos.findIndex(proj => proj.id === projeto.id);
            state.projetos[indexProjeto] = projeto
        },
        [EXCLUIR_PROJETO](state, idProjeto: string){
            state.projetos = state.projetos.filter(proj => proj.id != idProjeto);
        }
    }
});

export function useStore(): Store<Estado>{
    return vuexUseStore(key);
}