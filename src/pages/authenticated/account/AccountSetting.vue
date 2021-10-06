<template>
  <v-card outlined tile>
    <v-card-title class="text-h6">
      Account Settings
    </v-card-title>
    <v-card-subtitle>
      Update your username and manage your account
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
            outlined
            dense
            :rules="rules.required"
            v-model="account.username"
            label="Username"
            required
        ></v-text-field>

        <v-text-field
            outlined
            dense
            :rules="rules.required"
            v-model="account.email"
            label="Login Mail"
            required
        ></v-text-field>
        <v-btn
            color="error"
        >
          Delete your account?
        </v-btn>
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
    return{
      valid:true,
      account:{
        username:"John Doe",
        email:"johndoe@example.com",
      },
      rules:{
        required: [
          v => !!v || 'This field is required',
        ],
      }
    }
  }

}
</script>