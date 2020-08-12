import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import TitleText from '../TitleText/TitleText';
const NumberContainer = (props) => {

    return (
        <View style={{ ...styles.numberContainer, ...props.style }}>
            <TitleText style={styles.number}>{props.children}</TitleText>
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
        borderTopRightRadius: 30,
        borderColor: colors.secondary,
        borderWidth: 5

    },
    number: {
        color: colors.praimaryText,
        fontSize: 22
    }
})
export default NumberContainer;