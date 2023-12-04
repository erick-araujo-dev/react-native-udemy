import React from 'react';
import { View, StyleSheet } from 'react-native';

const FlexBoxV3 = () => {
    return (
        <View style={style.flexV3}>
            <View style={style.v1}></View>
            <View style={style.v0}></View>
            <View style={style.v2}></View>
        </View>
    );
};

const style = StyleSheet.create({
    flexV3: {
        backgroundColor: "#000",
        width: 100,
        flexGrow: 1
    },
    v0: {
        backgroundColor: "pink",
        height: 100   
     },
    v1: {
        backgroundColor: "orange",
        flexGrow: 1
    }, 
    v2: {
        backgroundColor: "purple",
        flexGrow: 1
    }
})

export default FlexBoxV3;