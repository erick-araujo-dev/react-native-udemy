import React, { useState } from 'react';
import { Text } from 'react-native';
import CounterDisplay from './CounterDisplay';
import CounterButtons from './CounterButtons';


const CounterV2 = () => {
    const [numero, setNumero] = useState(0);

    const inc = () => setNumero(numero + 1);
    const dec = () => setNumero(numero - 1);
    
    return (
        <>
            <CounterDisplay numero={numero}/>
            <CounterButtons inc={inc} dec={dec}/>
        </>
        
    );
};

export default CounterV2;