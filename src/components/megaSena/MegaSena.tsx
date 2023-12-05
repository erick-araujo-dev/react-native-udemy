import React, { ChangeEvent } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import globalStyle from "../../styles/globalStyle";
import MegaSenaNumeros from "./MegaSenaNumeros";


interface MegaSenaState {
  qtdNumero: string;
  numerosGerados: number[];
}

export default class MegaSena extends React.Component<MegaSenaState> {
  state = {
    qtdNumero: 6,
    numerosGerados: [],  
  };

  gerarNumeros = (qtdNumero: number) => {
    const numerosGerados: number[] = [];
  
    while (numerosGerados.length < qtdNumero) {
      const numeroAleatorio = Math.floor(Math.random() * 60) + 1;
  
      if (!numerosGerados.includes(numeroAleatorio)) {
        numerosGerados.push(numeroAleatorio);
      }
    }
    numerosGerados.sort((a, b) => a - b);
  
    this.setState({
      numerosGerados,
    });
  };
  


  // handleChange = (text: string) => {
  //   this.setState({ qtdNumero: text });
  // }

    render() {
        const { qtdNumero, numerosGerados  } = this.state;

        return (
            <>
                <Text style={globalStyle.textGrande}>
                    Gerando Números aleatorios 
                </Text>
                <View>
                <Text>{numerosGerados.map((n, index) => 
                    <MegaSenaNumeros numero={n} key={index}></MegaSenaNumeros>
                  )}
                  </Text>
                </View>
                {/* <TextInput
                    style={globalStyle.inputText}
                    placeholder="Quantidade de números"
                    value={qtdNumero.toString()}
                    onChangeText={this.handleChange}
                    keyboardType="numeric"
                /> */}
                <TouchableOpacity style={globalStyle.botao} onPress={() => this.gerarNumeros(+qtdNumero)}>
                  <Text  style={globalStyle.textGrande}>GERAR</Text>
                </TouchableOpacity>

            </>
        )
    }
}