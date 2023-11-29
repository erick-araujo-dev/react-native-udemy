import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Primeiro from './src/components/Primeiro';
import MultiComponents, {Componente1, Componente2} from './src/components/MultiComponents';
import NumerosAleatorios from './src/components/NumerosAleatorios';
import globalStyle from './src/styles/globalStyle';
import Botao from './src/components/Botao';
import Counter from './src/components/Counter';

export default function App() {
  const numeroRandom1 = Math.floor(Math.random() * 99) + 1;
  const numeroRandom2 = Math.floor(Math.random() * 99) + 1;
  return (
    <SafeAreaView style={globalStyle.app}>
      <Counter />
      {/* <Primeiro />
      <Botao/>
      <MultiComponents />
      <Componente1 />
      <NumerosAleatorios numero1={numeroRandom1} numero2={numeroRandom2} />
      <NumerosAleatorios numero1={1} numero2={1} />
      <Componente2 /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
