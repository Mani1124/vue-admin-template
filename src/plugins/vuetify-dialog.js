import Vue from 'vue'
import vuetify from './vuetify'
import VuetifyDialog from 'vuetify-dialog'
import 'vuetify-dialog/dist/vuetify-dialog.css'
Vue.use(VuetifyDialog, {
  context: {
    vuetify,
  },
})
