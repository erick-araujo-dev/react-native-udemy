import React from 'react';
import { Platform, Text } from 'react-native';
import globalStyle from '../styles/globalStyle';

const DiferenciacaoPlataforma = () => {
    
    if(Platform.OS === "android"){
            return <Text style={globalStyle.textGrande}>Android</Text>
        } else if (Platform.OS === "ios") {
            return <Text style={globalStyle.textGrande}>iOS</Text>
        } else {
            return <Text style={globalStyle.textGrande}>Outra Plataforma</Text>
        }
};

export default DiferenciacaoPlataforma;