import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import BodyText from '../BodyText/BodyText';
const NumberContainer = (props) => {

    return (
        <View style={{...styles.numberContainer,...props.style}}>
            <BodyText style={styles.number}>{props.children}</BodyText>
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