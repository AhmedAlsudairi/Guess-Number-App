import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Card from '../components/Card/Card';
import Input from '../components/Input/Input';
import colors from '../constants/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const StartScreen = (props) => {

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game</Text>
            <Card> 
            <Text>Select a number:</Text>
            <Input 
            style={styles.input}
            keyboardType='number-pad'
            maxLength={2} 
            blurOnSubmit />
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title='Confirm' color={colors.primary}/>
                </View>
                <View style={styles.button}>
                    <Button title='Reset' color={colors.secondary}/>
                </View>
            </View>
            </Card>
        </View>
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