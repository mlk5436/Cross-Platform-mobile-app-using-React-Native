/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet,Text, View} from 'react-native';

export default class Second extends Component {
  render() {
    return (
      <View>
      <View style={{backgroundColor: 'darkblue', height: 650}}>
        <View style={{width: 375, height: 20, backgroundColor: 'white'}}/>
        <View style={{flex:1, flexDirection: 'column', alignItems: 'center', paddingTop: 50}}>
          <Text style={{color: 'white'}}>Second Page </Text>
        </View>
      </View>
      <View style={{width: 375, height: 20, backgroundColor: 'white', alignItems: 'center'}}>
        <Text style={{color: 'grey'}}>Copyright@mlk5436@psu.edu</Text>
      </View>
      </View>
    );
  }
}
