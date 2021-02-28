import { createContext } from 'react'

export const DarkThemeContext = createContext({
  isDark: false,
  putDarkTheme: ()=>{}
})

export default DarkThemeContext;