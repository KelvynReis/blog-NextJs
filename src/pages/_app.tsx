import '../styles/global-styles.ts';
import type { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
