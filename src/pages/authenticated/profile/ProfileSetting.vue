<template>
    <v-card outlined tile>
      <v-card-title class="text-h6">
        Edit Profile
      </v-card-title>
      <v-card-subtitle>
        Set Up Your Personal Information
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
                    v-model="profile.name"
                    label="Name"
                    required
                ></v-text-field>
                <v-text-field
                    outlined
                    :rules="rules.required"
                    v-model="profile.phone"
                    dense
                    label="Phone Number"
                    required
                ></v-text-field>
                <v-text-field
                    outlined
                    dense
                    :rules="rules.required"
                    v-model="profile.email"
                    label="E-mail"
                    required
                ></v-text-field>

                <v-select
                    outlined
                    :rules="rules.required"
                    v-model="profile.country"
                    dense
                    :items="['India','US','Australia']"
                    label="Country"
                    required
                ></v-select>
                <v-select
                    outlined
                    :rules="rules.required"
                    v-model="profile.city"
                    dense
                    :items="['Delhi','Mumbai']"
                    label="City"
                    required
                ></v-select>
                <v-text-field
                    outlined
                    :rules="rules.required"
                    v-model="profile.company"
                    dense
                    label="Company Name"
                    required
                ></v-text-field>
                <v-text-field
                    outlined
                    :rules="rules.required"
                    v-model="profile.website"
                    dense
                    label="Website"
                    required
                ></v-text-field>
                <v-textarea
                    outlined
                    :rules="rules.required"
                    v-model="profile.bio"
                    required
                    name="input-7-4"
                    label="Bio-data"
                ></v-textarea>
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
      profile:{
        name:"John Doe",
        email:"johndoe@example.com",
        phone:"+91 0123456789",
        country:"India",
        city:"Delhi",
        company:"Example",
        website:"www.example.com",
        bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
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