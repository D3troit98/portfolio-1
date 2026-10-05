import 'styled-components';
import theme from './default';

type PortfolioTheme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends PortfolioTheme {}
}
