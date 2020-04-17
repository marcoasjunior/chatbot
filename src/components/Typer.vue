<template>
    <div>
        <v-container>
            <VueTyper :text='getBotText' :repeat='0' />
        </v-container>
    </div>
</template>

<script>

import {
    VueTyper
} from 'vue-typer'

export default {
    name: "Typer",
    components: {
        VueTyper
    },
    computed: {
        getBotText: function () {
            return this.$store.getters.botText
        }
    },

}
</script>

<style scoped>





</style>