import React, { Component } from 'react';

import {View} from "react-native"
import {Item,ImgFerramenta,NomeFerramenta} from "./styles"

export default class lista extends Component {
  render() {
    return (
        <View>
        <Item>
        {/* <ImgFerramenta source={require('../../img/Furadeira.png')}></ImgFerramenta> */}
            <NomeFerramenta>Furadeira</NomeFerramenta>
        </Item>
        <Item>
            {/* <ImgFerramenta source={require('../../img/Alicate_de_bico.png')}></ImgFerramenta> */}
            <NomeFerramenta>Alicate de Bico</NomeFerramenta>
        </Item>
        <Item>
            {/* <ImgFerramenta source={require('../../img/Arrebitador.png')}></ImgFerramenta> */}
            <NomeFerramenta>Alicate Rebitador</NomeFerramenta>
        </Item>
        <Item>
            {/* <ImgFerramenta source={require('../../img/Chave_filips.png')}></ImgFerramenta> */}
            <NomeFerramenta>Chave Filips</NomeFerramenta>
        </Item>
    </View>
    );
}
}
