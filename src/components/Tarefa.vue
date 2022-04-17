<template>
  <box>
    <div class="columns">
      <div class="column is-4">{{tarefa.descricao || 'Tarefa sem descrição'}}</div>
      <div class="column is-3">
        {{tarefa.projeto?.nome || 'N/D' }}
      </div>
      <div class="column">
        <cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
      </div>
      <div class="column" align="right">
          <button class="delete is-medium" style="display:flex" @click="excluirTarefa">X</button>
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