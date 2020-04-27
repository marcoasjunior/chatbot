
<template>
  <v-simple-table height="300px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Data</th>
          <th class="text-left">Horário</th>
          <th class="text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in items" :key="i">
          <td>{{ item.date | dateFormat }}</td>
          <td>{{ item.date | hourFormat }}</td>
          <td>{{ item.status }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>


<script>

import api from '../services/axiosConfig'
import moment from 'moment'

export default {

  name: "TableAppointments",

  data() {

    return {
      items: null

    }
  },

  filters: {

    dateFormat: function (value) {

      return moment(value).format('DD/MM/YYYY')


    },

    hourFormat: function (value) {

      return moment(value).format('HH:mm')

    }

  },

  methods: {

    async getData() {

      let id = localStorage.id

      await api.get(`/appointment/${id}`)
        .then((response) => {

          this.items = response.data

        })

        .catch(e => {
          alert(e)
        })

    }
  },

  created() {

    this.getData()

  },

}
</script>