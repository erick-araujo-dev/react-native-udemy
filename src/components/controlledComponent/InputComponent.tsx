import React, {useState} from 'react';
import { Text, TextInput } from 'react-native';
import globalStyle from '../../styles/globalStyle';

const InputComponent = () => {
    const [name, setName] = useState("");
    return (
        <>
            <TextInput style={globalStyle.inputText}
            placeholder="What's your name"
            value={name}
            onChangeText={name => setName(name)}

            />
        </>
    );
};

export default InputComponent;