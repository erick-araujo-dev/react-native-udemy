import { Text, View } from "react-native";
import globalStyle from "../styles/globalStyle";

 interface NumerosAleatoriosProps{
    numero1: number,
    numero2: number
 }
 const NumerosAleatorios:React.FC<NumerosAleatoriosProps> = ({numero1, numero2}) => {
    console.warn(numero1, numero2)
    return(
        <View>
    {
      (numero1 === numero2) ? (
        <Text style={globalStyle.textGrande}>O número {numero1} é igual ao número {numero2}</Text>
      ) : (
        (numero1 > numero2) ? (
          <Text style={globalStyle.textGrande}>O número {numero1} é maior que o número {numero2}</Text>
        ) : (
          <Text style={globalStyle.textGrande}>O número {numero1} é menor que o número {numero2}</Text>
        )
      )
    }
  </View>
    );
 }

 export default NumerosAleatorios;