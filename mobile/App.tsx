import React from 'react';
import { StatusBar, View,Text } from 'react-native';
import { AppLoading } from 'expo';
import {
  Roboto_400Regular,
  Roboto_500Medium
} from '@expo-google-fonts/roboto';

import { 
  Ubuntu_700Bold,
  useFonts
} from '@expo-google-fonts/ubuntu';

import Routes from './src/routes';


export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
        
        <Routes />
      </>
      
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#7159c1',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
