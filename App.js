import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import fetchFonts from './utils/fetchFonts';
import AppLoading from 'expo-app-loading';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import InGameScreen from './screens/InGameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false)

  const [userNumber, setUserNumber] = useState(0)
  const [guessRound, setGuessRound] = useState(0)

  const handleConfirmNumber = number => {
    setUserNumber(number)
  }

  const handleRestart = () => {
    setUserNumber(0)
    setGuessRound(0)
  }

  let content = <StartGameScreen onConfirmNumber={handleConfirmNumber} />
  
  if (!dataLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={e => console.log(e)}
      />
    )
  }

  if (userNumber && !guessRound) {
    content = <InGameScreen userNumber={userNumber} setGuessRound={setGuessRound} />
  }

  if (guessRound) {
    content = <GameOverScreen 
      userNumber={userNumber} 
      guessRounds={guessRound} 
      onRestart={handleRestart} 
    />
  }

  return (
    <View style={styles.container}>
      <Header />
      {content}
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
