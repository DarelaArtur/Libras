import React, { Component } from 'react';


import {Fundo,Logo} from "./styles"
export default class header extends Component {
  render() {
      return(
       <Fundo>
           <Logo source={require('../../img/logo.png')} ></Logo>
       </Fundo>
      )}
      //zzzzzzz
}
