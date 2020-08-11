import React, {useState} from 'react';
import { StyleSheet, View} from 'react-native';
import Header from './components/Header/Header';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
export default function App() {
  const [selectedNumber,setSelectedNumber] = useState();

  const onStartGameHandler = number => {
    setSelectedNumber(number);
  }

  let content = <StartScreen onStartGame={onStartGameHandler}/>

  if(selectedNumber){
    content = <GameScreen selectedNumber={selectedNumber}/>
  }
  return (
    <View style={styles.screen}>
      <Header title='Guess a Number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})

