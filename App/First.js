
import React, { Component } from 'react';
import {View, Text, Image, Button, Alert, StyleSheet, TouchableHighlight} from 'react-native';

class First extends Component{

  componentWillMount () {
        var navigator = this.props.navigator;
        setTimeout (() => {
            navigator.replace({
                name: 'Second',
            });
        }, 2000);
    }

  render(){
        return (
          <Image
            source={require('./images/psubar.jpg')}
            style={styles.container}>
            <Text style={{paddingBottom: 120, color:'white', fontSize: 30, fontWeight: 'bold'}}>PSU Bars</Text>
          </Image>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default First;
