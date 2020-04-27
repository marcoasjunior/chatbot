<template>
    <div>
        <v-form @submit="sendAnswer">
            <v-container class="d-flex flex-column mb-6">

                <v-container class="ma-0">

                    <v-text-field append-outer-icon="mdi-send" @click:append-outer="sendAnswer" v-model="userText" :readonly="getLoading"
                        label="..." solo></v-text-field>

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

        }
    },

    methods: {

        sendAnswer(e) {

            e.preventDefault();

            this.$store.dispatch(`changeLoading`)
            this.$store.dispatch(`changeText${this.getState}`, this.userText)
            this.userText = ''

        },
    },

    computed: {
        getState: function () {
            return this.$store.getters.step
        },

        getLoading: function () {
            return this.$store.getters.loading
        },
    },
}
</script>

<style>
  
</style>