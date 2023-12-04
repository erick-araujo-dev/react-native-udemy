import React from 'react';
import { View } from 'react-native';

interface QuadradoProps {
    cor?: string;
    lado? : number
}

const Quadrado: React.FC<QuadradoProps> = ({ cor = "black", lado = 50 }) => {
    return (
        <View style={{
            width: lado,
            height: lado,
            backgroundColor: cor
        }} />
    );
};

export default Quadrado;
