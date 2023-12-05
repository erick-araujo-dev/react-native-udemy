import Quadrado from './src/components/layout/Quadrado';
import Family from './src/components/componentPaiFilho/Family';
import Member from './src/components/componentPaiFilho/Member';
import InputComponent from './src/components/controlledComponent/InputComponent';
import ListaProdutos from './src/components/produtos/ListaProdutos';
import ListaProdutosV2 from './src/components/produtos/ListaProdutosV2';
import globalStyle from './src/styles/globalStyle';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import FlexBoxV1 from './src/components/layout/FlexBoxV1';
import FlexBoxV2 from './src/components/layout/FlexBoxV2';
import FlexBoxV3 from './src/components/layout/FlexBoxV3';
import MegaSena from './src/components/megaSena/MegaSena';
// import { StatusBar } from 'expo-status-bar';
// import Primeiro from './src/components/Primeiro';
// import MultiComponents, {Componente1, Componente2} from './src/components/MultiComponents';
// import NumerosAleatorios from './src/components/NumerosAleatorios';
// import Botao from './src/components/Botao';
// import Counter from './src/components/Counter';
// import CounterV2 from './src/components/counter/CounterV2';
// import DiferenciacaoPlataforma from './src/components/DiferenciacaoPlataforma';

export default function App() {
  // const numeroRandom1 = Math.floor(Math.random() * 99) + 1;
  // const numeroRandom2 = Math.floor(Math.random() * 99) + 1;
  return (
    <SafeAreaView style={globalStyle.app}>
      <MegaSena/>
      {/* <Primeiro />
      <FlexBoxV3/>
      <FlexBoxV2/>
      <FlexBoxV1/>
      <InputComponent></InputComponent>
      <ListaProdutosV2/>
      <ListaProdutos></ListaProdutos>
      <Family>
        <Member firtsName='Erick' lastName='Araujo de Carvalho'></Member>
      </Family>
      <DiferenciacaoPlataforma />
      <CounterV2/>
      <Counter />
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
