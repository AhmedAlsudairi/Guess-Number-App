import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../constants/colors';
const NumberContainer = (props) => {

    return (
        <View style={{...styles.numberContainer,...props.style}}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    numberContainer: {
        backgroundColor: colors.primary,
        marginVertical: 25,
        width: '30%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
        },
    number: {
        color: colors.praimaryText,
        fontSize: 22
    }
})
export default NumberContainer;