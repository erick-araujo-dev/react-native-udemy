import React from 'react';
import { Text } from 'react-native';
import globalStyle from '../../styles/globalStyle';

interface MemberProps{
    firtsName: string,
    lastName: string
}
const Member:React.FC<MemberProps> = ({firtsName, lastName}) => {
    return (
        <Text style={globalStyle.textGrande}>{firtsName} {lastName}</Text>
    );
};

export default Member;