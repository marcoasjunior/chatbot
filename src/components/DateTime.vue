<template>
  <div>
    <v-conteiner class="d-flex flex-column mx-4">
    <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" :return-value.sync="date"
      transition="scale-transition" offset-y min-width="290px">
      <template v-slot:activator="{ on }">
        <v-text-field v-model="computedDateFormattedMomentjs" label="Data" prepend-icon="mdi-calendar" readonly v-on="on"></v-text-field>
      </template>
      <v-date-picker v-model="date" no-title scrollable>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="menu1 = false">Cancel</v-btn>
        <v-btn text color="primary" @click="$refs.menu1.save(date)">OK</v-btn>
      </v-date-picker>
    </v-menu>

    <v-menu ref="menu" v-model="menu2" :close-on-content-click="false" :nudge-right="40" :return-value.sync="time"
      transition="scale-transition" offset-y max-width="290px" min-width="290px">
      <template v-slot:activator="{ on }">
        <v-text-field v-model="time" label="Horário" prepend-icon="mdi-clock" readonly v-on="on"></v-text-field>
      </template>
      <v-time-picker v-if="menu2" v-model="time" full-width format="24hr" @click:minute="$refs.menu.save(time)">
      </v-time-picker>
    </v-menu>

    <v-btn depressed small @click="registerDateTime">Marcar</v-btn>
    </v-conteiner>
  </div>
</template>

<script>
import moment from 'moment'

export default {

  name: "DateTime",

  data() {
    return {

      time: '',
      menu2: false,
      date: '',
      menu1: false,

    }


  },

  computed: {

    computedDateFormattedMomentjs() {
      return this.date ? moment(this.date).format('DD/MM/YYYY') : ''

    },

    getDateTime() {
      return `${this.date} ${this.time}`
    }

  },
  methods: {

    registerDateTime() {

      if (this.time === '' || this.date === '') return this.$store.dispatch(`changeText0`, 'Por favor, escolha uma data e um horário adequados.')

      let data = new Date(this.getDateTime)

      this.$store.dispatch(`changeLoading`)
      this.$store.dispatch(`registerAppointment`, data)

    }
  },
}
</script>