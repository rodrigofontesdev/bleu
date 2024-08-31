import 'styled-components'
import { bleu } from '../styles/theme'

type ThemeType = typeof bleu

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
