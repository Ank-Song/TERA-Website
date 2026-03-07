import { createContext, useContext, useState } from 'react'
import en from './en'
import pt from './pt'

const LangContext = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('tera-lang') || 'en')
  const strings = lang === 'pt' ? pt : en
  const t = key => key.split('.').reduce((o, k) => o?.[k], strings) ?? key
  const toggle = () => {
    const n = lang === 'en' ? 'pt' : 'en'
    setLang(n)
    localStorage.setItem('tera-lang', n)
  }
  return (
    <LangContext.Provider value={{ lang, t, toggle, strings }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLanguage = () => useContext(LangContext)

export const useStrings = () => {
  const { lang } = useLanguage()
  return lang === 'pt' ? pt : en
}
