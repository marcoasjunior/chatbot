<template>
    <v-card class="mx-auto card">
        <v-card-text>
            <div>ChatBot</div>

            <Typer />

        </v-card-text>

        <Input />

    </v-card>
</template>

<script>

import Typer from '@/components/Typer.vue'
import Input from '@/components/Input.vue'

export default {

  name: 'Chat',
  components: {
      Typer,
      Input
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
