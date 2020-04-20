<template>
    <div>
        <v-form @submit="sendAnswer">
            <v-container class="d-flex">

                <v-text-field append-outer-icon="mdi-send" @click:append-outer="sendAnswer" v-model="userText" label="Type" solo></v-text-field>

            </v-container>
        </v-form>
    </div>
</template>

<script>

export default {
    name: "Input",

    data() {
        return {
            userText: ''
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

<style scoped>
</style>