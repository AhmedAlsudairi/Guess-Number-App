import React, {useState} from 'react';
import { StyleSheet, View} from 'react-native';
import Header from './components/Header/Header';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
export default function App() {
  const [selectedNumber,setSelectedNumber] = useState();
  const [rounds,setRounds] = useState();

  const onNewGameHandler = () => {
    setSelectedNumber(null);
    setRounds(null);
  }

  const onStartGameHandler = number => {
    setSelectedNumber(number);
  }

  const onGameOverHandler = rounds => {
    setRounds(rounds);
  }
  let content = <StartScreen onStartGame={onStartGameHandler}/>

  if(selectedNumber && !rounds){
    content = <GameScreen selectedNumber={selectedNumber} onGameOver={onGameOverHandler}/>
  }else if(rounds){
    content= <GameOverScreen selectedNumber={selectedNumber} guessRounds={rounds} onNewGame={onNewGameHandler}/>
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

