import 'react-native-gesture-handler';
import React, { useState, useEffect, useMemo } from 'react';
import { View, ActivityIndicator, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from 'tailwindcss-react-native'
import RootScreen from './RootScreen';
import { Provider } from 'react-redux';
import { mystore } from './redux/MyStore';
// import store from './app/store';



export default function App() {

  return (
    <Provider store={mystore}>
      <NavigationContainer>
        <TailwindProvider preview={true}>
          <RootScreen />
        </TailwindProvider>
      </NavigationContainer>
    </Provider>
  );
}

