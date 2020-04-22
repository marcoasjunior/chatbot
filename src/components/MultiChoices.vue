<template>
    <div>
        <v-container class="d-flex flex-column justify-center">

            <v-list dense>
                <v-list-item-group color="primary">
                    <v-list-item v-for="(item, i) in getMultiChoices" :key="i">
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-btn @click="sendAnswer" depressed value='1' small>{{item.option}}</v-btn>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>

            <transition name="anime">     
                <DateTime class="d-flex flex-column" v-if="reveal === 'date'" />
                <TableAppointments v-else-if="reveal === 'table'" />
                <FormUpdateUser v-else-if="reveal === 'form'" />
            </transition>

        </v-container>        
    </div>
</template>

<script>

import DateTime from './DateTime'
import TableAppointments from './TableAppointments'
import FormUpdateUser from './FormUpdateUser'


export default {

    name: "MultiChoices",

    data() {
        return {

            date: null,
            reveal: ''
        }
    },

    methods: {

        sendAnswer(e) {

            if (e.target.innerText == 'MARCAR CONSULTA') return this.reveal = 'date'
            if (e.target.innerText == 'VERIFICAR HORÁRIO')  return this.reveal = 'table'
            if (e.target.innerText == 'MODIFICAR DADOS') return this.reveal = 'form'


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
    DateTime,
    TableAppointments,
    FormUpdateUser
    }
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