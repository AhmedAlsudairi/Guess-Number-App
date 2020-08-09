import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {

    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 45,
        backgroundColor: '#f70576',
        width: '100%',
        height: 120,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 28
    }
})
export default Header;