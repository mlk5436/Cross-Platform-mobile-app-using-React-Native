import React, { Component } from 'react';
import {StyleSheet,Text, View, TouchableHighlight, flexDirection} from 'react-native';

export default class Bar_Bleu extends Component{
  navigate(routeName){
    this.props.navigator.push({
      name: routeName
    })
  }
    render(){
        return(
          <View>
          <View style={{flex:1, flexDirection:'row', paddingTop: 30}}>
            <Text style={{width:150, height:35, fontSize:30, fontWeight:'bold'}}>Bar Bleu Menu</Text>
            <TouchableHighlight onPress={this.navigate.bind(this, 'Second')} style={styles.button}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableHighlight>
          </View>
          </View>
        );
    }

}

const styles = StyleSheet.create({
  button: {
    marginLeft: 100,
    marginTop:2,
    height: 35,
    width:100,
    backgroundColor: 'white'
  },
    buttonText: {
      fontSize: 22,
      color: 'black',
      alignSelf: 'center'
    },
      });
