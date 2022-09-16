//Types
import type { AppProps } from 'next/app';

//Styles
import 'styles/globals.css';

//Components
import MainLayout from 'components/MainLayout/MainLayout/MainLayout.component';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
