import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert, ScrollView } from 'react-native';
import Card from '../components/Card/Card';
import Input from '../components/Input/Input';
import colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer/NumberContainer';
import { Header } from 'react-native/Libraries/NewAppScreen';
import BodyText from '../components/BodyText/BodyText';
import TitleText from '../components/TitleText/TitleText';
import MainButton from '../components/MainButton/MainButton';
import { Ionicons } from '@expo/vector-icons';
const generateRandomGuess = (min, max, exclude) => {
    let minimaum = Math.ceil(min);
    let maximum = Math.floor(max);
    const guess = Math.floor((Math.random() * (maximum - minimaum)) + minimaum);

    if (guess === exclude) {
        return generateRandomGuess(min, max, exclude);
    } else {
        return guess;
    }

}
const GameScreen = (props) => {
    const initialGuess = generateRandomGuess(0, 100, props.selectedNumebr);
    const [guessed, SetGuessed] = useState(initialGuess);
    const [pastGuesses, setRounds] = useState([initialGuess]);
    const max = useRef(100);
    const min = useRef(1);

    useEffect(() => {
        if (guessed === props.selectedNumber) {
            props.onGameOver(pastGuesses.length);
        }
    })
    const nextGuess = (hint) => {

        if ((hint === 'lower' && guessed < props.selectedNumber) || (hint === 'greater' && guessed > props.selectedNumber)) {
            Alert.alert('Don\'t lie!', 'Give us the correct hint...', [{ text: 'Okay', style: 'cancel' }]);
            return;
        }

        if (hint === 'lower') {
            max.current = guessed;
        } else if (hint === 'greater') {
            min.current = guessed + 1;
        }

        let newGuess = generateRandomGuess(min.current, max.current, guessed);
        SetGuessed(newGuess);
        setRounds(prevPastGuesses => [newGuess, ...prevPastGuesses])
    }
    return (
        <View style={styles.screen}>

            <TitleText>Gueesed number: </TitleText>
            <NumberContainer style={styles.numberContainer}>{guessed}</NumberContainer>
            <Card style={styles.buttons}>
                <MainButton title='LOWER' onPress={() => { nextGuess('lower') }} color={colors.secondary} style={styles.button}>
                    <Ionicons name="md-remove-circle-outline" size={17} color={colors.praimaryText} />
                </MainButton>
                <MainButton title='GREATER' onPress={() => { nextGuess('greater') }} color={colors.primary} style={styles.button}>
                    <Ionicons name="md-add-circle-outline" size={16} color={colors.praimaryText} />
                </MainButton>
            </Card>
            <View style={styles.list}>
                <ScrollView>
                    {pastGuesses.map((guess, index) =>
                        <View style={styles.listItem} key={index}>
                            <BodyText>#{pastGuesses.length-index}</BodyText>
                            <BodyText>{guess}</BodyText>
                        </View>)}
                </ScrollView>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 30,
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
    },
    list: {
        width: '80%'
    },
    listItem: {
        borderWidth: 1,
        borderRadius: 3,
        borderColor: colors.primary,
        color: colors.secondaryText,
        marginVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 5
    }

})
export default GameScreen;