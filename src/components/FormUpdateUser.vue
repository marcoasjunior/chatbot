
<template>
<v-form>
    <v-container>
      <v-row>

        <v-col cols="12" sm="6">

          <v-text-field
            label="Nome"
            :placeholder='namePh'
            prepend-icon="mdi-account"
            v-model="name"
          ></v-text-field>

        </v-col>
        <v-col cols="12" sm="6">

          <v-text-field
            label="e-mail"
            :placeholder='emailPh'
            prepend-icon="mdi-email"
            v-model="email"
          ></v-text-field>

        </v-col>
        <v-col cols="12" sm="6">

          <v-text-field
            label="Whatsapp"
            :placeholder='whatsappPh'
            prepend-icon="mdi-whatsapp"
            v-model="whatsapp"
          ></v-text-field>

        </v-col>
        <v-col cols="12" sm="6">

          <v-text-field
            label="Senha"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            :placeholder='passwordPh'
            prepend-icon="mdi-lock"
            v-model="password"
          ></v-text-field>

        </v-col>
      <v-btn @click="updateUser" depressed block :disabled='getLoading'> Salvar</v-btn>
      </v-row>
    </v-container>
</v-form>
</template>


<script>

import api from '../services/axiosConfig'

export default {

  name: "FormUpdateUser",

  data() {

    return {

      namePh: '',
      name: '',
      emailPh: '',
      email: '',
      whatsappPh: '',
      whatsapp: '',
      passwordPh: '',
      password:'',
      show1: false,
      rules: {
          min: v => v.length >= 6 || 'Mínimo 6 caracteres',
        },

    }
  },

  filters: {

  },

     computed: {
        getLoading: function () {
            return this.$store.getters.loading
        },
    },

   methods: {

    async getData() {

      let id = '5e9dd4ede9a3e529a06ce062'

      await api.get(`/user/${id}`)
        .then((response) => {

          this.namePh = response.data[0].name
          this.emailPh = response.data[0].email
          this.whatsappPh = response.data[0].whatsapp
          this.passwordPh = response.data[0].password

        })

        .catch(e => {
          alert(e)
        })
    },

    updateUser() {

      let data  = {

        id: '5e9dd4ede9a3e529a06ce062', // REFATORAR
        name: this.name,
        email: this.email,
        password: this.password,
        whatsapp: this.whatsapp

      }
      
      this.$store.dispatch(`changeLoading`)
      this.$store.dispatch(`updateUser`, data)

    }


  },

  created() {

    this.getData()

  },
}
</script>