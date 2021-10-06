<template>
  <v-card outlined tile>
    <v-card-title class="text-h6">
      Password Settings
    </v-card-title>
    <v-card-subtitle>
      Change or reset your account password
    </v-card-subtitle>
    <v-card-text>
      <v-container>
        <v-row justify="center">
          <v-col cols="8">
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
                  label="Old Password"
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
                  name="new_password"
                  label="New password"
                  @click:append="showPassword2 = !showPassword2"
              />
            </v-form>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  text
              >
                Cancel
              </v-btn>
              <v-btn
                  color="primary"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>

  </v-card>
</template>
<script>
export default {
  data(){
    return {
      valid: true,
      showPassword: false,
      showPassword2: false,
      user: {
        password: null,
        confirm_password: null
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
  }

}
</script>