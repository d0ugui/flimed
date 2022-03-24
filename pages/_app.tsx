import type { AppProps } from 'next/app';

import { AuthProvider } from '../src/context/AuthContext';

import GlobalStyles from '../src/styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
