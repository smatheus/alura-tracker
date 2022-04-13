<template>
  <Formulario @aoSalvarTarefa="salvarTarefa" />
  <div class="lista">
    <tarefa v-for="(tarefa, index) in tarefas" :key="index" @excluirTarefa="removerTarefa" :tarefa="tarefa"/>
    <box v-if="listaEstaVazia"> Você não está muito produtivo hoje :( </box>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Formulario from "../components/Formulario.vue";
import Tarefa from "../components/Tarefa.vue";
import ITarefa from "../interfaces/ITarefa";
import Box from "../components/Box.vue";

export default defineComponent({
  components: { Formulario, Tarefa, Box },
  name: "TarefasView",
  data() {
    return {
      tarefas: [] as ITarefa[]
    };
  },
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0;
    },
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },
    removerTarefa(tarefa: ITarefa) {
      let indexTarefa = this.tarefas.indexOf(tarefa);
      this.tarefas.splice(indexTarefa, 1);
    }
  },
});
</script>