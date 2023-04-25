import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translation_vn from './vn.json'
import translation_zh from './zh.json'

const resources = {
  vn: {
    translation: translation_vn,
  },
  zh: {
    translation: translation_zh,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'zh',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
