/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';
import AppContainer from './routes';
import store from './store';

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppContainer />
        <Toast />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
