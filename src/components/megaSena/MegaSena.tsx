import React, { ChangeEvent } from "react";
import { Text, TextInput } from "react-native";
import globalStyle from "../../styles/globalStyle";

interface MegaSenaProps {
  qtdNumero: number;
}

interface MegaSenaState {
  qtdNumero: string;
}

export default class MegaSena extends React.Component<MegaSenaProps, MegaSenaState> {
  constructor(props: MegaSenaProps) {
    super(props);
    this.state = {
      qtdNumero: props.qtdNumero.toString(),
    };
  }

  handleChange = (text: string) => {
    this.setState({ qtdNumero: text });
  }

    render() {
        const { qtdNumero } = this.props;

        return (
            <>
                <Text style={globalStyle.textGrande}>
                    Gerando numeros aleatorios {qtdNumero}
                </Text>
                <TextInput
                    style={globalStyle.inputText}
                    placeholder="Quantidade de números"
                    value={this.state.qtdNumero}
                    onChangeText={text => this.handleChange(text)}
                />
            </>
        )
    }
}