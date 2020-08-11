import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert , Image} from 'react-native';
import Card from '../components/Card/Card';
import Input from '../components/Input/Input';
import colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer/NumberContainer';
import { Header } from 'react-native/Libraries/NewAppScreen';
import BodyText from '../components/BodyText/BodyText';
import TitleText from '../components/TitleText/TitleText';
const GameScreen = (props) => {
    return (
        <View style={styles.screen}>
            
            <TitleText>GAME OVER</TitleText>
            <Image source={require('../assets/success.png')} style={styles.image} resizeMode='cover'/>
            <BodyText>The number was: {props.selectedNumber}</BodyText>
            <BodyText>Guess rounds: {props.guessRounds}</BodyText>
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
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: colors.primary,
        margin: 15
    }
})
export default GameScreen;