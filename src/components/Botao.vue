<template>
    <button
      class="button"
      :disabled="desabilita"
      @click="eventoClick"
    >
      <span class="icon">
        <i :class="icone"></i>
      </span>
      <span>{{texto}}</span>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'BotaoTemporizador',
    emits: ['eventoClick'],
    props: {
        desabilita: {
            type: Boolean,
            default: false
        },
        icone: {
            type: String,
            required: true
        },
        texto: {
            type: String,
            default: '',
            required: true
        }
    },
    methods: {
        eventoClick(): void {
            this.$emit('eventoClick')
        }
    }
});
</script>
