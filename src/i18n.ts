import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { CONTENT } from './content'
import type { Locale } from './content'

function savedLocale(): Locale {
  try {
    return window.localStorage.getItem('careconnect-locale') === 'en' ? 'en' : 'es'
  } catch {
    return 'es'
  }
}

void i18n.use(initReactI18next).init({
  resources: {
    es: { translation: CONTENT.es },
    en: { translation: CONTENT.en },
  },
  lng: savedLocale(),
  fallbackLng: 'es',
  supportedLngs: ['es', 'en'],
  interpolation: { escapeValue: false },
})

export default i18n
