import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card/Card';
import Input from '../components/Input/Input';
import colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer/NumberContainer';
import { Header } from 'react-native/Libraries/NewAppScreen';

const GameScreen = (props) => {
    return (
        <View style={styles.screen}>
            
            <Text>GAME OVER</Text>
            <Text>The number was: {props.selectedNumber}</Text>
            <Text>Guess rounds: {props.guessRounds}</Text>
            <Button title='START NEW GAME' onPress={props.onNewGame}/>
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