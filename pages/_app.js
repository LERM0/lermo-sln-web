import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import 'antd/dist/antd.css';
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

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
