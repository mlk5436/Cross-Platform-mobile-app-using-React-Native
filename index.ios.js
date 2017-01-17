
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Text,
  Navigator
} from 'react-native';

import First from './App/First';
import Second from './App/Second';

export default class reactnativeapp extends Component {
  renderScene(route, navigator){
    if(route.name == 'First'){
        return <First navigator={navigator}/>
    }
    if(route.name == 'Second'){
        return <Second navigator={navigator}/>
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'First'}}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}


AppRegistry.registerComponent('reactnativeapp', () => reactnativeapp);