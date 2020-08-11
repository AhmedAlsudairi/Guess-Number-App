import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card/Card';
import Input from '../components/Input/Input';
import colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer/NumberContainer';

const StartScreen = (props) => {
    const [enteredText, setEnteredText] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setselectedNumber] = useState();

    const validateInput = inputText => {
        setEnteredText(inputText.replace(/\[^0-9]/g, ''));
    }

    const resetHandler = () => {
        setEnteredText('');
        setConfirmed(false);
    }

    const confirmHandler = () => {
        const number = parseInt(enteredText);
        if (isNaN(number) || number <= 0 || number > 99) {
            Alert.alert('Invalid Number!','You have to choose number between 1 and 99',[{text:'Okay',style:'destructive',onPress: resetHandler}])
            return;
        }
        setConfirmed(true);
        setselectedNumber(number);
        setEnteredText('');
        Keyboard.dismiss();
    }

    let result;
    if (confirmed) {
        result = (<Card>
            <Text>You choose: Did you want to start?</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
                <View style={styles.button}> 
                    <Button title='START GAME' onPress={()=>{ props.onStartGame(selectedNumber)}} color={colors.primary}/>
                </View>
                
        </Card>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={()=>{ Keyboard.dismiss()}}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game</Text>
                <Card>
                    <Text>Select a number:</Text>
                    <Input
                        style={styles.input}
                        keyboardType='number-pad'
                        maxLength={2}
                        blurOnSubmit
                        onChangeText={validateInput}
                        value={enteredText} />

                    <View style={styles.buttons}>
                        <View style={styles.button}>
                            <Button title='Confirm' color={colors.primary} onPress={confirmHandler} />
                        </View>
                        <View style={styles.button}>
                            <Button title='Reset' color={colors.secondary} onPress={resetHandler} />
                        </View>
                    </View>
                </Card>
                {result}
            </View>
        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: 20,
        alignItems: 'center',
        flex: 1,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 18
    },
    input: {
        width: '20%',
        textAlign: 'center'
    },
    buttons: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        width: '65%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        flexDirection: 'row',
        width: '60%',
        borderWidth: 1,
        borderRadius: 3,
        margin: 10,
        justifyContent: 'center'
    }
})
export default StartScreen;