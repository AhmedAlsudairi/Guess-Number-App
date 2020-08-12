import React from 'react';
import {TouchableOpacity,View,Text, StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import BodyText from '../BodyText/BodyText';
import TitleText from '../TitleText/TitleText';

const MainButton = (props) => {

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
            <View style={{...styles.mainButton,...props.style,backgroundColor: props.color}}>
                <TitleText style={styles.buttonText}>{props.title} {props.children}</TitleText>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    mainButton: {
        width: 100,
        height: 50,
        marginVertical: 15,
        marginHorizontal:20,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 25
    },
    buttonText: {
        color: colors.praimaryText,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    }
})
export default MainButton;