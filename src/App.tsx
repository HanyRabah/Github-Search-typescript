import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import configureStore from './store';
import ErrorBoundary from './ErrorBoundary';
import Router from "./Router";
import theme from "./theme";
import Loader from './components/Loader';

const { store, persistor } = configureStore();


const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={<Loader />} persistor={persistor}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
