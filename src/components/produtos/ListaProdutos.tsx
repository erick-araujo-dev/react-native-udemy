import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import globalStyle from '../../styles/globalStyle';
import produtos from './produtos';

const ListaProdutos = () => {
    const obterLista = () =>{
        return produtos.map(p=> {
            return  <Text  style={style.txt} key={p.id}>
                        {p.id} - {p.nome} R$ {p.preco} 
                    </Text>
        })
    } 
    return (
        <>
            <Text style={globalStyle.textGrande}>Lista de Produtos</Text>
            {obterLista()}
        </>
    );
};

const style = StyleSheet.create({
    txt: {
        textAlign: "left"
    }
})

export default ListaProdutos;