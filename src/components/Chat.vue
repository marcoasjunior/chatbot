<template>
    <v-card class="mx-auto card">
        <v-card-text>
            <div>ChatBot</div>

            <Typer />

        </v-card-text>
        <v-form @submit="sendAnswer">
            <v-container class="d-flex">

                <v-text-field v-model="userText" label="Type" solo></v-text-field>

            </v-container>
        </v-form>
    </v-card>
</template>

<script>

import Typer from '@/components/Typer.vue'

export default {

  name: 'Chat',
  components: {
      Typer
  },

  data() {
      return {
          userText: ''
      }
  },

  methods: {

      sendAnswer(e) {

          e.preventDefault();

          this.$store.dispatch('changeText', this.userText)
          
          this.userText = ''

          
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
