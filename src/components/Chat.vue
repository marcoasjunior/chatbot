<template>
  <v-card class="mx-auto card" :loading="getLoading">
    <v-card-text>
      <div>Linkbot</div>

      <Typer />

    </v-card-text>
    <transition name="anime">     
        <Choice v-if="getType === 'choice'" />
        <MultiChoices v-else-if="getType === 'multichoices'" />
        <FormLogin v-else-if="getType === 'form'" />
        <Input v-else />

    </transition>

    <v-card-actions>
      <v-container class="d-flex justify-space-between">
        <v-btn class="ma-2" color="teal" icon @click="goBack">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn class="ma-2" color="teal" icon @click="goForward">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-container>
    </v-card-actions>

  </v-card>

</template>

<script>

import Typer from '@/components/Typer.vue'
import Input from '@/components/Input.vue'
import Choice from '@/components/Choice.vue'
import MultiChoices from '@/components/MultiChoices.vue'
import FormLogin from '@/components/FormLogin.vue'

export default {

  name: 'Chat',

  components: {
      Typer,
      Input,
      Choice,
      MultiChoices,
      FormLogin
  },

  methods: {

    goBack() {

      this.$store.dispatch(`changeStep`, -1)

    },

    goForward() {

      this.$store.dispatch(`changeStep`, 1)

    }
  },

  computed: {
    
      getType() {
          return this.$store.getters.type
      },

      getLoading: function () {
            return this.$store.getters.loading
        },
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

.anime-enter-active {
  animation: coming 1s;
  animation-delay: .5s;
  opacity: 0;
}
.anime-leave-active {
  animation: going .2s;
}

@keyframes going {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

</style>
