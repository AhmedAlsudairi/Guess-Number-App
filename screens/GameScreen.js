import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card/Card';
import Input from '../components/Input/Input';
import colors from '../constants/colors';


const generateRandomGuess = (min , max, exclude) => {
    let minimaum = ceil(min);
    let maximum = floor(max);
    const guess = (random()*(maximum-minimaum))+minimaum;
    if(guess === exclude){
        return generateRandomGuess(min, max , exclude);
    }
    return guess;
}
const GameScreen = (props) => {
    const [guess,SetGuess] = useState(generateRandomGuess(0,100,props.numebr));
}

const styles = StyleSheet.create({
    
})
export default GameScreen;