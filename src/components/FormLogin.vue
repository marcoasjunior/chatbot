
<template>
<v-form>
    <v-container>
      <v-row>

        <v-col cols="12" sm="6">

          <v-text-field
            label="Nome"
            prepend-icon="mdi-account"
            v-model="login"
          ></v-text-field>

        </v-col>
        <v-col cols="12" sm="6">

          <v-text-field
            label="e-mail"
            prepend-icon="mdi-lock"
            v-model="password"
            :type="show1 ? 'text' : 'password'"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          ></v-text-field>

        </v-col>

      <v-btn @click="signIn" depressed block :disabled='getLoading'> Entrar</v-btn>
      </v-row>
    </v-container>
</v-form>
</template>


<script>

export default {

  name: "FormLogin",

  data() {

    return {

      login: '',
      password: '',
      show1: false,

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

    signIn() {

      let data  = {

        login: this.login,
        password: this.password

      }
      
      this.$store.dispatch(`changeLoading`)
      this.$store.dispatch(`changeText1b`, data)

    }


  }
}
</script>