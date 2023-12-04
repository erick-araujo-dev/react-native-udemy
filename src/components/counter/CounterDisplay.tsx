import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface CounterDisplayProps{
    numero: number
}

const CounterDisplay:React.FC<CounterDisplayProps> = ({numero}) => {
    return (
        <View style={style.display} >
            <Text style={style.text}>{numero}</Text>
        </View>
    );
};

export default CounterDisplay;

const style = StyleSheet.create({
    display: {
        width: 250,
        height: 100, 
        backgroundColor: "#fff",
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    text: {
        color: "#000",
        fontSize: 50,
        

    }
})