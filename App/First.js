
import React, { Component } from 'react';
import {View, Text, Image, Button, Alert, StyleSheet, TouchableHighlight} from 'react-native';

class First extends Component{

  navigate(routeName){
    this.props.navigator.push({
      name: routeName
    })

  }
  render(){
        return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{width: 375, height: 20, backgroundColor: 'white'}}/>
            <View style={{width: 375, height: 630, backgroundColor: 'darkblue'}}>
            <View style={{flex:2, flexDirection: 'column', alignItems: 'center', paddingBottom: 215, paddingTop:100}}>
                    <Image
                        style={{width: 200, height: 200}}
                        source={{url: 'https://facebook.github.io/react/img/logo_og.png'}}
                    />
                    <View style={{paddingTop: 20}}>
                        <Text style = {styles.white}> React Native</Text>
                    </View>
                    <View style={{paddingTop: 10}}>
                        <TouchableHighlight onPress={this.navigate.bind(this, 'Second')} style={styles.button}>
                        <Text style={styles.buttonText}>Start</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
            <View style={{width: 375, height: 20, backgroundColor: 'white', alignItems: 'center'}}>
            <Text style={styles.grey}>Copyright@mlk5436@psu.edu</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 35,
    backgroundColor: 'grey',
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center'
  },
    buttonText: {
      fontSize: 22,
      color: 'white',
      alignSelf: 'center'
    },
    white: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
    },
      });

export default First;
