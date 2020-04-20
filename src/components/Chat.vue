<template>
    <v-card class="mx-auto card">
        <v-card-text>
            <div>ChatBot</div>

            <Typer />

        </v-card-text>

        <Choice v-if="getType == 'choice'" />
        <Input v-else/>

    </v-card>
</template>

<script>

import Typer from '@/components/Typer.vue'
import Input from '@/components/Input.vue'
import Choice from '@/components/Choice.vue'

export default {

  name: 'Chat',

  components: {
      Typer,
      Input,
      Choice
  },

  computed: {
      getType() {
          return this.$store.getters.type
      }
  },

}
</script>

<style scoped>

.card {
    margin-top: 3%;
    margin-left: 10px;
    margin-right: 10px;
    max-width: 600px;
    width: 100%;
}



</style>
