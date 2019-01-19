
import React, {Component} from 'react';
import store from './src/store';
import {Provider} from 'react-redux';
import { AppRegistry } from 'react-native';
import AppContainer from './src/routes'
import {setState} from './src/actions/actions'
// import navBar from './src/pages/components/NavBar'

console.ignoredYellowBox = ['Setting a timer'];

export default class App extends Component {
  render () {
    store.dispatch(setState());

    return (
      <Provider store={store}>
        <AppContainer  />
      </Provider>
    );
  }
}



AppRegistry.registerComponent('Chat', () => App);