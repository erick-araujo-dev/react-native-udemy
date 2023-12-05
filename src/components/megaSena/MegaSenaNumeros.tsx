import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import globalStyle from '../../styles/globalStyle';

interface MegaSenaNumerosProps {
    numero: number
}
const MegaSenaNumeros:React.FC<MegaSenaNumerosProps> = ({numero}) => {
    return (
        <View style={style.container}> 
            <Text style={style.numeroMega}>{numero}</Text>
        </View>

    );
};

const style = StyleSheet.create({
    numeroMega: {
        color: "#fff",
        fontSize: 24,
        margin: 5
    }, 
    container: {
        backgroundColor: "green",
        padding: 5,
        borderRadius: 50,
        width: 50, 
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    }
})
export default MegaSenaNumeros;