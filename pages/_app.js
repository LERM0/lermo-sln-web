import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ConfigProvider } from 'antd';
import locale from 'antd/lib/locale/th_TH';
import themeDefault from '@themes/default';

import 'swiper/swiper-bundle.min.css';

import '../styles/globals.css';

import createStore from '@redux/store';

const store = createStore();

const theme = {
  colors: {
    primary: {
      main: '#fc665c',
      light: '#036C38',
      dark: '#024825',
    },
    secondary: {
      main: '#1E8764',
      light: '#27A87D',
      dark: '#1A6D51',
    },
  },
  transitions: {
    default: '.2s',
    slow: '.5s',
    fast: '.1s',
  },
  medias: {
    lg: '1199px',
    md: '991px',
    sm: '767px',
  },
};

const DefaultLayout = ({ children }) => children;

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout;

  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider locale={locale} theme={themeDefault}>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default MyApp;
