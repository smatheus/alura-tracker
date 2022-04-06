<template>
  <box>
    <div class="columns">
      <div class="column is-7">{{tarefa.descricao || 'Tarefa sem descrição'}}</div>
      <div class="column">
        <cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
      </div>
      <div class="column">
          <button @click="excluirTarefa">X</button>
      </div>
    </div>
  </box>
</template>

<script lang="ts">
import ITarefa from "../interfaces/ITarefa";
import { defineComponent, PropType } from "vue";
import Cronometro from "./Cronometro.vue";
import Box from "./Box.vue";

export default defineComponent({
  name: "TarefaVisualizacao",
  components: { Cronometro, Box },
  emits: ['excluirTarefa'],
  props: {
      tarefa: {
          type: Object as PropType<ITarefa>,
          required: true
      }
  },
  methods: {
      excluirTarefa() {
          this.$emit('excluirTarefa', this.tarefa)
      }
  }
});
</script>