import { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import globalStyle from "../styles/globalStyle";

const Counter = () => {
    const [count, setCount] =  useState(0);
    return(
        <>
            <Text style={globalStyle.textGrande}>{count}</Text>
            <>
            <TouchableOpacity style={globalStyle.botao} onPress={() => setCount(count + 1)}>
            <Text>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={globalStyle.botao} onPress={() => setCount(count - 1)}>
            <Text>-</Text>
            </TouchableOpacity>
            </>
        </>
    );
}
export default Counter