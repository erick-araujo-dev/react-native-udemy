import React from 'react';
import { Text } from 'react-native';


const Family:React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <>
            {children}
        </>
        );
};

export default Family;