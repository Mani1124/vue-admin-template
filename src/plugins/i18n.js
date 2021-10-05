import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Vuetify from 'vuetify/lib/framework';
Vue.use(Vuetify);
Vue.use(VueI18n);
import en from "../i18n/en";
import sv from "../i18n/sv";
import es from '../i18n/es'
const i18n = new VueI18n({
    locale: 'en', // set locale,
    fallbackLocale:'en',
    messages:{"en":en,"sv":sv,"es":es}
})
export default i18n;

