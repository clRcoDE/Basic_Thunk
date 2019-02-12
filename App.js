/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStore,applyMiddleware} from 'redux'
import rootReducer from './src/Services/Reducers/rootReducer'
import {Provider} from 'react-redux'
import Main from './src/Pages/Main';
import thunk from 'redux-thunk'
export const store = createStore(rootReducer,applyMiddleware(thunk))

export default class App extends Component {
  render() {
    return (
      <Provider store={store} style={styles.container}>
        <Main/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
