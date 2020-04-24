<template>
    <div>
        <v-container>
            <!-- <VueTyper :text='getBotText' :repeat='0' :type-delay=45 /> -->

    <transition name="anime">

    <span class="subtitle-1"
    >
     {{getBotText}} 
    </span>
  </transition>

        </v-container>
    </div>
</template>

<script>

// import {
//     VueTyper
// } from 'vue-typer'

export default {
    name: "Typer",
    components: {
        // VueTyper
    },
    computed: {
        getBotText: function () {
            return this.$store.getters.botText
        }
    },

}
</script>

<style scoped>

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