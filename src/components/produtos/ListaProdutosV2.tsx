import React from 'react';
import { Text, FlatList } from 'react-native';
import globalStyle from '../../styles/globalStyle';
import produtos from './produtos';

const ListaProdutosV2 = () => {

    const renderProdutos = ({item: p}) => {
        return <Text>{p.id}) {p.nome} - R$ {p.preco}</Text>
    }

    return (
        <>
            <Text style={globalStyle.textGrande}>Lista de produtos</Text>
            <FlatList
            data={produtos}
            renderItem={renderProdutos}
            />
        </>
    );
};

export default ListaProdutosV2;