import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { LogBox} from 'react-native';

import AppLoading from 'expo-app-loading';

import { Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium, useFonts } from '@expo-google-fonts/poppins';
import { Archivo_700Bold, Archivo_600SemiBold } from '@expo-google-fonts/archivo';

import { Routes } from './src/routes';

export default function App() {

  const [fontsValided] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_500Medium,
    Archivo_600SemiBold,
    Archivo_700Bold
  });
  
  LogBox.ignoreLogs(['Cannot update a component from inside the function body of a different component.'])

  if (!fontsValided) {
    return <AppLoading />
  }

  return (
    <Routes />
  );
}
