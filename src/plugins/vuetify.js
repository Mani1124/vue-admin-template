import Vuetify from 'vuetify/lib/framework';
import i18n from "./i18n";
export default new Vuetify({
    rtl: false,
    lang: {
        t: (key, ...params) => i18n.t(key, params),
    },
});
