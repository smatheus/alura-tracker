<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <cronometro :tempoEmSegundos="tempoEmSegundos" />
    <botao :desabilita="isCronometroRodando" icone="fas fa-play" texto="play" @eventoClick="iniciar" />
    <botao :desabilita="!isCronometroRodando" icone="fas fa-stop" texto="stop" @eventoClick="finalizar" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Botao from "./Botao.vue";
import Cronometro from "./Cronometro.vue";

export default defineComponent({
  components: { Cronometro, Botao },
  name: "Temporizador-tarefa",
  emits: ['aoTemporizadorFinalizado'],
  data() {
    return {
      tempoEmSegundos: 0,
      cronometro: 0,
      isCronometroRodando: false,
    };
  },
  methods: {
    iniciar() {
      this.isCronometroRodando = true;
      this.cronometro = setInterval(() => {
        this.tempoEmSegundos += 1;
      }, 1000);
    },
    finalizar() {
      clearInterval(this.cronometro);
      this.isCronometroRodando = false;
      this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos);
      this.tempoEmSegundos = 0;
    },
  },
});
</script>