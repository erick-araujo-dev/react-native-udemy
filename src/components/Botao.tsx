import { Button, TouchableOpacity, Text } from "react-native";
import globalStyle from "../styles/globalStyle";


const Botao = () => {
    const onPress = () => {
        console.warn("Executando 1")
    }
    return(
         <>
         <TouchableOpacity style={globalStyle.botao} onPress={onPress}>
           <Text>Pressione 1</Text>
         </TouchableOpacity>
         <TouchableOpacity style={globalStyle.botao} onPress={() => {console.warn("Executando 2")}}>
           <Text>Pressione 2</Text>
         </TouchableOpacity>
       </>
    );
}

export default Botao;