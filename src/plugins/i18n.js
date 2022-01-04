import Vue from 'vue';
import VueI18n from 'vue-i18n';

import en from '@/translations/en';
import fr from '@/translations/fr';

Vue.use(VueI18n);

console.log(process.env);

export const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || navigator.language.split('-')[0] || process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: {
    en,
    fr,
  },
  silentFallbackWarn: true,
});

export default {
  i18n,
};
