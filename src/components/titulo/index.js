import React, { Component } from 'react';

 import {Titulo,QtdTermos,TitleView} from "./styles";

export default class titulo extends Component {
  render() {
    return (
            <TitleView>
                <Titulo>Glossário da Indústria</Titulo>
                <QtdTermos>222 Termos</QtdTermos>
            </TitleView>
    );
  }
}
