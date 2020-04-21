<template>
  <v-row>

    <v-date-picker v-model="date1" full-width show-current locale="pt-BR"></v-date-picker>
        <v-col class="lg-offset8" md="12" lg="4">
      <v-time-picker v-model="e7" format="24hr"></v-time-picker>
    </v-col>

  </v-row>
</template>

<script>
  export default {

    name: "DatePicker",

    data () {
      return {

        date1: new Date().toISOString().substr(0, 10),

      }
    },
  }
</script>