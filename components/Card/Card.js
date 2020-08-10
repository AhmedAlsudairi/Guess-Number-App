import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Card = (props) => {

    return (
        <View style={styles.inputContainer}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '80%',
        padding: 20,
        marginVertical: 15,
        shadowColor: 'gray',
        shadowOffset: { height: 2, width: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        backgroundColor: 'white',
        elevation: 10,
        alignItems: 'center'
    }
})
export default Card;