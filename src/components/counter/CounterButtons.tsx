import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import globalStyle from '../../styles/globalStyle';

interface CounterButtonsProps{
    inc: () => void,
    dec: () => void
}
const CounterButtons:React.FC<CounterButtonsProps> = ({inc, dec}) => {
    return (
        <View style={style.viewBotao}>
            <TouchableOpacity style={style.botao} onPress={dec}>
            <Text style={style.text}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.botao} onPress={inc}>
            <Text style={style.text}>+</Text>
            </TouchableOpacity>
       </View>
    );
};

export default CounterButtons;


const style = StyleSheet.create({
    viewBotao:{
        display: "flex",
        justifyContent: 'space-between',
        width: 250, 
        flexDirection: 'row',
        marginTop: 20

    },
    botao: {
        width: 115,
        height: 80, 
        backgroundColor: "#fff",
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    text: {
        color: "#000",
        fontSize: 50,
    }
})