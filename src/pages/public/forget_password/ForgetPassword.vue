<template>
  <v-container fluid>
    <v-row v-if="this.$route.params.context">
      <v-col cols="12" class="pb-0 pt-0">
        <breadcrumb :items="breadcrumbItems"/>
      </v-col>
    </v-row>
    <v-row
        justify="center"
        align="center"
    >
      <v-col
          class="xs"
          lg="4"
          md="6"
          sm="12"
          style="margin: 0 auto"
      >
        <v-card
            elevation="5"
            class="mx-auto mt-5"
        >
          <v-card-text>
            <div style="padding: 15px;border-bottom-left-radius: 0px;border-bottom-right-radius: 0px;text-align: center;position: relative">
              <v-row
                  justify="center"
                  class="mt-0"
              >
                <img  style="height: 80px;width: 70px;"
                      src="./../../../assets/logo.svg"
                      alt="Logo"
                >
              </v-row>
              <h2
                  class="text-md-center text-lg-center form-title mt-7"
              >
                {{ $t('forgetpassword') }}
              </h2>
              <p class="font-weight-regular text-md-center text-lg-center body-1 mt-1">
                Please fill in to recover your password
              </p>
            </div>

            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
              <v-text-field
                  dense
                  prepend-inner-icon="mdi-email"
                  v-model="user.email"
                  :rules="rules.required"
                  label="Email"
                  required
                  name="email"
                  outlined
              >
              </v-text-field>

            </v-form>
            <v-btn
                class="mt-5 mb-5"
                block
                :loading="submit"
                :disabled="submit"
                color="success"
                @click="validateForm"
            >
              Send Reset Link
              <template v-slot:loader>
                <span class="custom-loader">
                  <v-icon light>mdi-cached</v-icon>
                </span>
              </template>
            </v-btn>
          </v-card-text>
        </v-card>

      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";

export default {
  name:"user-forget-password-form",
  components:{
    'breadcrumb':Breadcrumb,
  },
  data () {
    return {
      breadcrumbItems:[
        {
          text: 'Home',
          disabled: false,
          to: {name:'Dashboard'},
        },
        {
          text: 'Forget Password',
          disabled: true,
          to: {name:'PageForgetPassword'},
        },
      ],
      submit: false,
      valid: true,
      showPassword: false,
      user: {
        email:null,
        password: null,
      },
      rules: {
        email: [
          v => !!v || 'Email is required',
        ],
      },
    }
  },
  mounted() {
  },
  methods: {
    recoverPassword(){
      if(!this.$route.params.context)
        this.$router.push({name:'RecoverPassword'})
    },
    validateForm () {
      if (this.$refs.form.validate()) {
        this.recoverPassword()
      }
    },

  },

}
</script>
<style>
</style>
