import "./Config/ReactotronConfig";
import React, { Component } from 'react';

import Header from "./components/header"
import Titulo from "./components/titulo"

import { Container} from './styles';
import { Provider } from "react-redux";
import store from "./store"

export default class src extends Component {
render() {
    return (
      <Provider store={store}>
       <Header/>
    <Container>
       <Titulo/>
    </Container>
    </Provider>
    );

  }
}
