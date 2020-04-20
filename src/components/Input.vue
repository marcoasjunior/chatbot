<template>
    <div>
        <v-form @submit="sendAnswer">
            <v-container class="d-flex flex-column mb-6">

                <v-container v-if="test" class="d-flex justify-center">

                    <v-btn class="ma-0 pa-0 mx-2 mt-n6" :loading="loading" :disabled="loading" color="primary"
                        @click="loader = 'loading'">
                        Sim
                    </v-btn>

                    <v-btn class="ma-0 pa-0 mx-2 mt-n6" :loading="loading" :disabled="loading" color="error"
                        @click="loader = 'loading'">
                        Não
                    </v-btn>

                </v-container>

                <v-container v-else class="ma-0">

                    <v-text-field append-outer-icon="mdi-send" @click:append-outer="sendAnswer" v-model="userText"
                        label="Type" solo></v-text-field>

                </v-container>

            </v-container>
        </v-form>
    </div>
</template>

<script>

export default {
    name: "Input",

    data() {
        return {
            userText: '',
            loading: false,
            test: false
        }
    },

    methods: {

        sendAnswer(e) {

            e.preventDefault();

            this.$store.dispatch(`changeText${this.getState}`, this.userText)
            this.userText = ''

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