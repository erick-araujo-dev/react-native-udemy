import React from 'react';
import Quadrado from './Quadrado';
import { View, StyleSheet } from 'react-native';

const FlexBoxV1 = () => {
    return (
        <View style={style.flexV1}>
            <Quadrado cor="pink"/>
            <Quadrado cor="red"/>
            <Quadrado cor="yellow"/>
            <Quadrado cor="purple"/>
            <Quadrado cor="green"/>
        </View>
    );
};

const style = StyleSheet.create({
    flexV1: {
        flexGrow: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        width: "100%",
        alignItems: "center"
    }
})

export default FlexBoxV1;