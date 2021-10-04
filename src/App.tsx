import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from 'styled-react-modal';
import Routes from './routes';
import GlobalStyle from './styles/global';

export const App = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Routes />
      </ModalProvider>

      <GlobalStyle />
    </BrowserRouter>
  );
};
