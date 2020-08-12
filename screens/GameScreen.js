import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card/Card';
import Input from '../components/Input/Input';
import colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer/NumberContainer';
import { Header } from 'react-native/Libraries/NewAppScreen';
import BodyText from '../components/BodyText/BodyText';
import TitleText from '../components/TitleText/TitleText';
import MainButton from '../components/MainButton/MainButton';
import {Ionicons} from '@expo/vector-icons';
const generateRandomGuess = (min , max, exclude) => {
    let minimaum = Math.ceil(min);
    let maximum = Math.floor(max);
    const guess = Math.floor((Math.random()*(maximum-minimaum)) +minimaum);

    if(guess === exclude){
        return generateRandomGuess(min, max, exclude);
    }else{
        return guess;
    }
    
}
const GameScreen = (props) => {
    const [guessed,SetGuessed] = useState(generateRandomGuess(0,100,props.selectedNumebr));
    const [rounds,setRounds] = useState(0);
    const max = useRef(100);
    const min = useRef(1);

    useEffect(()=>{
        if(guessed === props.selectedNumber){
            props.onGameOver(rounds);
        }
    })
    const nextGuess = (hint) => {

        if((hint === 'lower' && guessed < props.selectedNumber) || (hint === 'greater' && guessed > props.selectedNumber)){
            Alert.alert('Don\'t lie!','Give us the correct hint...',[{text: 'Okay', style: 'cancel'}]);
            return;
        }

        if(hint === 'lower'){
            max.current = guessed;
        }else if(hint ==='greater'){
            min.current = guessed;
        }

        
        SetGuessed(generateRandomGuess(min.current,max.current,guessed));
        setRounds(prevRounds=>prevRounds+1)
    }
    return (
        <View style={styles.screen}>
            
            <TitleText>Gueesed number: </TitleText>
            <NumberContainer style={styles.numberContainer}>{guessed}</NumberContainer>
            <Card style={styles.buttons}>
                <MainButton title='LOWER' onPress={()=>{nextGuess('lower')}} color={colors.secondary} style={styles.button}>
                <Ionicons name="md-remove-circle-outline" size={17} color={colors.praimaryText} />
                </MainButton>
                <MainButton title='GREATER' onPress={()=>{nextGuess('greater')}} color={colors.primary} style={styles.button}>
                <Ionicons name="md-add-circle-outline" size={16} color={colors.praimaryText} />
                </MainButton>           
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
        width: '80%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    numberContainer: {
        width: '15%'
    },
    button: {
        width: 140
    }

})
export default GameScreen;