import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Card from '../components/Card/Card';
const Header = (props) => {

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game</Text>
            <Card> 
            <Text>Select a number:</Text>
            <TextInput style={styles.input} />
            <View style={styles.buttons}>
                <Button title='Confirm' />
                <Button title='Reset' />
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
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10,
        borderRadius: 2,
        width: '50%'
    },
    buttons: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        width: '65%',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})
export default Header;