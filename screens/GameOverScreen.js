import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert , Image} from 'react-native';
import Card from '../components/Card/Card';
import Input from '../components/Input/Input';
import colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer/NumberContainer';
import { Header } from 'react-native/Libraries/NewAppScreen';
import BodyText from '../components/BodyText/BodyText';
import TitleText from '../components/TitleText/TitleText';
import MainButton from '../components/MainButton/MainButton';
const GameScreen = (props) => {
    return (
        <View style={styles.screen}>
            
            <TitleText style={styles.title}>GAME OVER</TitleText> 
            <Image 
            source={require('../assets/success.png')} 
            // source={{uri: 'https://image.freepik.com/free-vector/glitch-game-background_23-2148090006.jpg'}}
            style={styles.image} 
            resizeMode='cover' 
            fadeDuration={1000}
            />
            <BodyText style={styles.text}>You select <Text style={styles.highlight}>{props.selectedNumber}</Text> number, the phone take <Text style={styles.highlight}>{props.guessRounds}</Text> rounds to guess your number.</BodyText>
                <MainButton title='START NEW GAME' onPress={props.onNewGame} color={colors.secondary} style={styles.button}/>
            
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
    image: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: colors.primary,
        margin: 15
    },
    highlight: {
        color: colors.primary,
        fontWeight: 'bold'
    },
    text: {
        marginHorizontal: 30,
        marginVertical: 15,
        fontSize: 18,
        textAlign: 'center'
    },
    title: {
        fontSize: 22
    },
    button: {
        width: '60%'
    }
})
export default GameScreen;