import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card/Card';
import Input from '../components/Input/Input';
import colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer/NumberContainer';
import { Header } from 'react-native/Libraries/NewAppScreen';


const generateRandomGuess = (min , max, exclude) => {
    let minimaum = Math.ceil(min);
    let maximum = Math.floor(max);
    const guess = Math.floor((Math.random()*(maximum-minimaum))+minimaum);

    if(guess === exclude){
        return generateRandomGuess(min, max , exclude);
    }
    return guess;
}
const GameScreen = (props) => {
    const [guessed,SetGuessed] = useState(generateRandomGuess(0,100,props.selectedNumebr));

    return (
        <View style={styles.screen}>
            
            <Text>Gueesed number: </Text>
            <NumberContainer style={styles.numberContainer}>{guessed}</NumberContainer>
            <Card style={styles.buttons}>
                <Button title='LOWER' />
                <Button title='GREATER' />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        width: '100%'
    },
    buttons: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        width: '65%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    numberContainer: {
        width: '15%'
    }
})
export default GameScreen;