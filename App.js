import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

import GameScreen from './screens/game';
import  Header  from './components/header';
import StartGameScreen from './screens/start-game';
import {colors} from './constants/colors';
import { useFonts } from 'expo-font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  containerLoaded: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
  }
});


export default function App() {
  const [userNumber,setUserNumber]= useState(0)
  const [loaded]=useFonts({
    'oswaldBold':require('./assets/fonts/Oswald-Bold.ttf'),
    oswaldLight: require('./assets/fonts/Oswald-Light.ttf'),
    oswaldMedium: require('./assets/fonts/Oswald-Medium.ttf'),
    oswaldRegular: require('./assets/fonts/Oswald-Regular.ttf'),
  })
  const title = !userNumber? 'Guess number': 'Game on'

  const onStartGame= (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  if (!loaded) {
    return (
      <View style={styles.containerLoaded}>
        <ActivityIndicator size='large' color={colors.primary}/>
      </View>
    )
  }
  let content = <StartGameScreen onStartGame={onStartGame}/>

  if (userNumber) {
    content= <GameScreen selectedNumber={userNumber}/>
  }
  return (
    <View style={styles.container}>
      <Header title= 'Guess your number'></Header>
      {content}
    </View>
  );
}

