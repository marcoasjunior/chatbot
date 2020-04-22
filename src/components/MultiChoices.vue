<template>
    <div>
        <v-container class="d-flex flex-column justify-center">

            <v-list dense>
                <v-list-item-group v-model="choice" color="primary">
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
            <v-conteiner class="d-flex flex-column" v-if="reveal === 'date'">
                <DatePicker />
                <TimePicker />
                <v-btn depressed small>Marcar</v-btn>
            </v-conteiner>
        </v-container>
    </div>
</template>

<script>

import DatePicker from './DatePicker'
import TimePicker from './TimePicker'

export default {

    name: "MultiChoices",

    data() {
        return {
            choice: null,
            date: null,
            reveal: ''
        }
    },

    methods: {

        sendAnswer() {

            if (this.choice === 0) return this.reveal = 'date'
            if (this.choice === 1) return this.reveal = ''
            if (this.choice === 2) return this.reveal = ''

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
    DatePicker,
    TimePicker
    }
}
</script>

<style>
  
</style>