<template>
    <div>
            <v-container class="d-flex justify-center">

                    <v-btn class="mx-7 " :loading="loading" :disabled="loading" color="primary"
                        @click="sendAnswer(1)">
                        Sim
                    </v-btn>

                    <v-btn class="mx-7 " :loading="loading" :disabled="loading" color="error"
                        @click="sendAnswer(2)">
                        Não
                    </v-btn>

            </v-container>
    </div>
</template>

<script>

export default {
    name: "Choice",

    data() {
        return {
            
            loading: false,

        }
    },

    methods: {

        sendAnswer(choice) {

            this.$store.dispatch(`changeText${this.getState}`, choice)

        },
    },

    computed: {
        getState: function () {
            return this.$store.getters.step
        }
    },
}
</script>

<style>
  
</style>