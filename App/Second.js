/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet,Text, View, TouchableHighlight, flexDirection} from 'react-native';

export default class Second extends Component {
  navigate(routeName){
    this.props.navigator.push({
      name: routeName
    })
  }
  render() {
    return (
      <View>
      <View style={{flex:1, flexDirection:'row', paddingTop:30}}>
          <Text style={{marginLeft: 10, height: 35,width:150,fontSize: 30, fontWeight: 'bold'}}>PSU Bars </Text>
          <Text style={{marginTop:15,marginLeft:80,height:35, width:75,fontSize: 15 }}>Filter:</Text>
      </View>
      <View style={{flex:2, flexDirection: 'column', paddingTop: 40}}>
        <View style={{height:630, backgroundColor:'lightgrey'}}>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Bar_Bleu')} style={styles.button}>
            <Text style={styles.buttonText}>Bar Bleu</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Second')} style={styles.button}>
            <Text style={styles.buttonText}>Darkhorse</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Second')} style={styles.button}>
            <Text style={styles.buttonText}>Cafe 210</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Second')} style={styles.button}>
            <Text style={styles.buttonText}>Inferno</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Second')} style={styles.button}>
            <Text style={styles.buttonText}>Liberty</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Second')} style={styles.button}>
            <Text style={styles.buttonText}>Local Whiskey</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Second')} style={styles.button}>
            <Text style={styles.buttonText}>Mad Mex</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Second')} style={styles.button}>
            <Text style={styles.buttonText}>The Phyrst</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Second')} style={styles.button}>
            <Text style={styles.buttonText}>Pickle's</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Second')} style={styles.button}>
            <Text style={styles.buttonText}>Primanti's</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Second')} style={styles.button}>
            <Text style={styles.buttonText}>Rathskeller</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Second')} style={styles.button}>
            <Text style={styles.buttonText}>Saloon</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Second')} style={styles.button}>
            <Text style={styles.buttonText}>Champs Downtown</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Second')} style={styles.button}>
            <Text style={styles.buttonText}>Shandygaff</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Second')} style={styles.button}>
            <Text style={styles.buttonText}>The Brewery</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Second')} style={styles.button}>
            <Text style={styles.buttonText}>Lion's Den</Text>
          </TouchableHighlight>
        </View>
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop:2,
    height: 35,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
    buttonText: {
      fontSize: 22,
      color: 'black',
      alignSelf: 'center'
    },
      });
