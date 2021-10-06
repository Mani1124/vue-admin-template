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
                {{ $t('recoverpassword') }}
              </h2>
              <p class="font-weight-regular text-md-center text-lg-center body-1 mt-1">
                Set New Password
              </p>
            </div>

            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >

              <v-text-field
                  id="otp"
                  v-model="user.password"
                  dense
                  :type="showPassword ? 'text' : 'password'"
                  outlined
                  :append-icon=" showPassword? 'mdi-eye' : 'mdi-eye-off'"
                  required
                  :rules="rules.password"
                  prepend-inner-icon="mdi-security"
                  name="password"
                  label="Password"
                  @click:append="showPassword = !showPassword"
              />
              <v-text-field
                  id="otp"
                  v-model="user.confirm_password"
                  dense
                  :type="showPassword2 ? 'text' : 'password'"
                  outlined
                  :append-icon=" showPassword2? 'mdi-eye' : 'mdi-eye-off'"
                  required
                  :rules="rules.confirm_password"
                  prepend-inner-icon="mdi-security"
                  name="confirm_password"
                  label="Confirm password"
                  @keyup.enter.native="validateForm"
                  @click:append="showPassword2 = !showPassword2"
              />
            </v-form>
            <v-btn
                class="mt-5 mb-5"
                block
                :loading="submit"
                :disabled="submit"
                color="success"
                @click="validateForm"
            >
              Reset Password
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
  name:"user-sign-in-form",
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
          disabled: false,
          to: {name:'PageForgetPassword'},
        },
        {
          text: 'Recover Password',
          disabled: true,
          to: {name:'PageRecoverPassword'},
        },
      ],
      submit: false,
      valid: true,
      showPassword: false,
      showPassword2: false,
      user: {
        password: null,
        confirm_password:null
      },
      rules: {
        password: [
          v => !!v || 'Password is required',
        ],
        confirm_password: [
          v => !!v || 'Confirm password is required',
        ],
      },
    }
  },
  mounted() {
  },
  methods: {
    getLogin(){
      if(!this.$route.params.context)
      this.$router.push({name:'SingIn'})
    },
    validateForm () {
      if (this.$refs.form.validate()) {
        this.getLogin()
      }
    },

  },

}
</script>
<style>
</style>
