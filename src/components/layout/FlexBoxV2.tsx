import React from 'react';
import Quadrado from './Quadrado';
import { View, StyleSheet } from 'react-native';

const FlexBoxV2 = () => {
    return (
        <View style={style.flexV2}>
            <Quadrado cor="pink" lado={30}/>
            <Quadrado cor="red" lado={40}/>
            <Quadrado cor="yellow" lado={60}/>
            <Quadrado cor="purple" lado={80}/>
            <Quadrado cor="green" lado={100}/>
        </View>
    );
};

const style = StyleSheet.create({
    flexV2: {
        backgroundColor: "#000",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "baseline",
        width: "100%",
        height: 400,
    }
})

export default FlexBoxV2;