<template>
    <div>
        <v-container class="d-flex flex-column justify-center">

            <v-list dense>
                <v-list-item-group v-model="items" color="primary">
                    <v-list-item v-for="(item, i) in getMultiChoices" :key="i" @click="sendAnswer">
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.option"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>

            <Datepicker />

        </v-container>
    </div>
</template>

<script>

import Datepicker from './DatePicker'

export default {
    name: "MultiChoices",
    data() {
        return {
            items: null
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
        },

        getMultiChoices: function () {
            return this.$store.getters.multiChoices
        },
    },

    components: {
    Datepicker
    }
}
</script>

<style>
  
</style>