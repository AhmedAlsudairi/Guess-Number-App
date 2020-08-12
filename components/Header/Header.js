import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import TitleText from '../TitleText/TitleText';
const Header = (props) => {

    return (
        <View style={styles.header}>
            <TitleText style={styles.headerTitle}>{props.title}</TitleText>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 45,
        backgroundColor: colors.primary,
        width: '100%',
        height: 120,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: colors.praimaryText,
        fontSize: 28
    }
})
export default Header;