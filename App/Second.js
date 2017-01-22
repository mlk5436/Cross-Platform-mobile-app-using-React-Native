/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet,Text, View, ScrollView, TouchableHighlight, flexDirection} from 'react-native';

export default class Second extends Component {
  navigate(routeName){
    this.props.navigator.push({
      name: routeName
    })
  }
  render() {
    return (
      <View>
      <View style={{flex: 1, flexDirection: 'column', paddingTop:30}}>
      <Text style={{height:38, marginLeft: 10,fontSize: 30, fontWeight: 'bold'}}>PSU Bars </Text>
      <View style={{height:2, backgroundColor:'lightgrey'}}></View>
      </View>
      <View style={{flex:2, flexDirection: 'column', paddingTop: 40}}>
        <View style={{height:630, backgroundColor:'lightgrey'}}>
        <ScrollView>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Bar_Bleu')} style={styles.button}>
          <View style={styles.horizontalContent}>
            <View style={styles.verticalContent}>
              <View style={styles.horizontalContent}>
                <Text style={styles.buttonText}>Bar Bleu</Text>
                <Text style={{paddingLeft: 20, color: 'grey'}}> 3.3 mi</Text>
              </View>
              <View style={styles.horizontalContent}>
                <Text style={styles.textInfo}>no update</Text>
              </View>
            </View>
            <View style={{paddingLeft: 40, justifyContent: 'center'}}>
              <Text> It's Lit! </Text>
            </View>
          </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Bar_Bleu')} style={styles.button}>
          <View style={styles.horizontalContent}>
            <View style={styles.verticalContent}>
              <View style={styles.horizontalContent}>
                <Text style={styles.buttonText}>Cafe 210</Text>
                <Text style={{paddingLeft: 20, color: 'grey'}}> 3.3 mi</Text>
              </View>
              <View style={styles.horizontalContent}>
                <Text style={styles.textInfo}>no update</Text>
              </View>
            </View>
            <View style={{paddingLeft: 40, justifyContent: 'center'}}>
              <Text> It's Lit! </Text>
            </View>
          </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Bar_Bleu')} style={styles.button}>
          <View style={styles.horizontalContent}>
            <View style={styles.verticalContent}>
              <View style={styles.horizontalContent}>
                <Text style={styles.buttonText}>Indigo</Text>
                <Text style={{paddingLeft: 20, color: 'grey'}}> 3.3 mi</Text>
              </View>
              <View style={styles.horizontalContent}>
                <Text style={styles.textInfo}>no update</Text>
              </View>
            </View>
            <View style={{paddingLeft: 40, justifyContent: 'center'}}>
              <Text> It's Lit! </Text>
            </View>
          </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Bar_Bleu')} style={styles.button}>
          <View style={styles.horizontalContent}>
            <View style={styles.verticalContent}>
              <View style={styles.horizontalContent}>
                <Text style={styles.buttonText}>Chrome</Text>
                <Text style={{paddingLeft: 20, color: 'grey'}}> 3.3 mi</Text>
              </View>
              <View style={styles.horizontalContent}>
                <Text style={styles.textInfo}>no update</Text>
              </View>
            </View>
            <View style={{paddingLeft: 40, justifyContent: 'center'}}>
              <Text> It's Lit! </Text>
            </View>
          </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Bar_Bleu')} style={styles.button}>
          <View style={styles.horizontalContent}>
            <View style={styles.verticalContent}>
              <View style={styles.horizontalContent}>
                <Text style={styles.buttonText}>Pickle's Tap Room</Text>
                <Text style={{paddingLeft: 20, color: 'grey'}}> 3.3 mi</Text>
              </View>
              <View style={styles.horizontalContent}>
                <Text style={styles.textInfo}>no update</Text>
              </View>
            </View>
            <View style={{paddingLeft: 40, justifyContent: 'center'}}>
              <Text> It's Lit! </Text>
            </View>
          </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Bar_Bleu')} style={styles.button}>
          <View style={styles.horizontalContent}>
            <View style={styles.verticalContent}>
              <View style={styles.horizontalContent}>
                <Text style={styles.buttonText}>Champs Downtown</Text>
                <Text style={{paddingLeft: 20, color: 'grey'}}> 3.3 mi</Text>
              </View>
              <View style={styles.horizontalContent}>
                <Text style={styles.textInfo}>no update</Text>
              </View>
            </View>
            <View style={{paddingLeft: 40, justifyContent: 'center'}}>
              <Text> It's Lit! </Text>
            </View>
          </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Bar_Bleu')} style={styles.button}>
          <View style={styles.horizontalContent}>
            <View style={styles.verticalContent}>
              <View style={styles.horizontalContent}>
                <Text style={styles.buttonText}>Rathskeller</Text>
                <Text style={{paddingLeft: 20, color: 'grey'}}> 3.3 mi</Text>
              </View>
              <View style={styles.horizontalContent}>
                <Text style={styles.textInfo}>no update</Text>
              </View>
            </View>
            <View style={{paddingLeft: 40, justifyContent: 'center'}}>
              <Text> It's Lit! </Text>
            </View>
          </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Bar_Bleu')} style={styles.button}>
          <View style={styles.horizontalContent}>
            <View style={styles.verticalContent}>
              <View style={styles.horizontalContent}>
                <Text style={styles.buttonText}>Local Whiskey</Text>
                <Text style={{paddingLeft: 20, color: 'grey'}}> 3.3 mi</Text>
              </View>
              <View style={styles.horizontalContent}>
                <Text style={styles.textInfo}>no update</Text>
              </View>
            </View>
            <View style={{paddingLeft: 40, justifyContent: 'center'}}>
              <Text> It's Lit! </Text>
            </View>
          </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Bar_Bleu')} style={styles.button}>
          <View style={styles.horizontalContent}>
            <View style={styles.verticalContent}>
              <View style={styles.horizontalContent}>
                <Text style={styles.buttonText}>The Phyrst</Text>
                <Text style={{paddingLeft: 20, color: 'grey'}}> 3.3 mi</Text>
              </View>
              <View style={styles.horizontalContent}>
                <Text style={styles.textInfo}>no update</Text>
              </View>
            </View>
            <View style={{paddingLeft: 40, justifyContent: 'center'}}>
              <Text> It's Lit! </Text>
            </View>
          </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Bar_Bleu')} style={styles.button}>
          <View style={styles.horizontalContent}>
            <View style={styles.verticalContent}>
              <View style={styles.horizontalContent}>
                <Text style={styles.buttonText}>shandygaff</Text>
                <Text style={{paddingLeft: 20, color: 'grey'}}> 3.3 mi</Text>
              </View>
              <View style={styles.horizontalContent}>
                <Text style={styles.textInfo}>no update</Text>
              </View>
            </View>
            <View style={{paddingLeft: 40, justifyContent: 'center'}}>
              <Text> It's Lit! </Text>
            </View>
          </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Bar_Bleu')} style={styles.button}>
          <View style={styles.horizontalContent}>
            <View style={styles.verticalContent}>
              <View style={styles.horizontalContent}>
                <Text style={styles.buttonText}>The Saloon</Text>
                <Text style={{paddingLeft: 20, color: 'grey'}}> 3.3 mi</Text>
              </View>
              <View style={styles.horizontalContent}>
                <Text style={styles.textInfo}>no update</Text>
              </View>
            </View>
            <View style={{paddingLeft: 40, justifyContent: 'center'}}>
              <Text> It's Lit! </Text>
            </View>
          </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Bar_Bleu')} style={styles.button}>
          <View style={styles.horizontalContent}>
            <View style={styles.verticalContent}>
              <View style={styles.horizontalContent}>
                <Text style={styles.buttonText}>The Brewery</Text>
                <Text style={{paddingLeft: 20, color: 'grey'}}> 3.3 mi</Text>
              </View>
              <View style={styles.horizontalContent}>
                <Text style={styles.textInfo}>no update</Text>
              </View>
            </View>
            <View style={{paddingLeft: 40, justifyContent: 'center'}}>
              <Text> It's Lit! </Text>
            </View>
          </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Bar_Bleu')} style={styles.button}>
          <View style={styles.horizontalContent}>
            <View style={styles.verticalContent}>
              <View style={styles.horizontalContent}>
                <Text style={styles.buttonText}>Mad Mex</Text>
                <Text style={{paddingLeft: 20, color: 'grey'}}> 3.3 mi</Text>
              </View>
              <View style={styles.horizontalContent}>
                <Text style={styles.textInfo}>no update</Text>
              </View>
            </View>
            <View style={{paddingLeft: 40, justifyContent: 'center'}}>
              <Text> It's Lit! </Text>
            </View>
          </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Bar_Bleu')} style={styles.button}>
          <View style={styles.horizontalContent}>
            <View style={styles.verticalContent}>
              <View style={styles.horizontalContent}>
                <Text style={styles.buttonText}>Inferno</Text>
                <Text style={{paddingLeft: 20, color: 'grey'}}> 3.3 mi</Text>
              </View>
              <View style={styles.horizontalContent}>
                <Text style={styles.textInfo}>no update</Text>
              </View>
            </View>
            <View style={{paddingLeft: 40, justifyContent: 'center'}}>
              <Text> It's Lit! </Text>
            </View>
          </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Bar_Bleu')} style={styles.button}>
          <View style={styles.horizontalContent}>
            <View style={styles.verticalContent}>
              <View style={styles.horizontalContent}>
                <Text style={styles.buttonText}>Liberty Craft House</Text>
                <Text style={{paddingLeft: 20, color: 'grey'}}> 3.3 mi</Text>
              </View>
              <View style={styles.horizontalContent}>
                <Text style={styles.textInfo}>no update</Text>
              </View>
            </View>
            <View style={{paddingLeft: 40, justifyContent: 'center'}}>
              <Text> It's Lit! </Text>
            </View>
          </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Bar_Bleu')} style={styles.button}>
          <View style={styles.horizontalContent}>
            <View style={styles.verticalContent}>
              <View style={styles.horizontalContent}>
                <Text style={styles.buttonText}>Primanti Bros.</Text>
                <Text style={{paddingLeft: 20, color: 'grey'}}> 3.3 mi</Text>
              </View>
              <View style={styles.horizontalContent}>
                <Text style={styles.textInfo}>no update</Text>
              </View>
            </View>
            <View style={{paddingLeft: 40, justifyContent: 'center'}}>
              <Text> It's Lit! </Text>
            </View>
          </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Bar_Bleu')} style={styles.button}>
          <View style={styles.horizontalContent}>
            <View style={styles.verticalContent}>
              <View style={styles.horizontalContent}>
                <Text style={styles.buttonText}>Lion's Den</Text>
                <Text style={{paddingLeft: 20, color: 'grey'}}> 3.3 mi</Text>
              </View>
              <View style={styles.horizontalContent}>
                <Text style={styles.textInfo}>no update</Text>
              </View>
            </View>
            <View style={{paddingLeft: 40, justifyContent: 'center'}}>
              <Text> It's Lit! </Text>
            </View>
          </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'Bar_Bleu')} style={styles.button}>
          <View style={styles.horizontalContent}>
            <View style={styles.verticalContent}>
              <View style={styles.horizontalContent}>
                <Text style={styles.buttonText}>The Darkhorse Tavern</Text>
                <Text style={{paddingLeft: 20, color: 'grey'}}> 3.3 mi</Text>
              </View>
              <View style={styles.horizontalContent}>
                <Text style={styles.textInfo}>no update</Text>
              </View>
            </View>
            <View style={{paddingLeft: 40,justifyContent: 'center'}}>
              <Text> It's Lit! </Text>
            </View>
          </View>
          </TouchableHighlight>
          <View style={{height:40}}></View>
          </ScrollView>
        </View>
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  verticalContent:{
    flexDirection: 'column', justifyContent: 'center'
  },
  horizontalContent:{
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: 250
  },
  textInfo: {
    marginLeft: 30,
    fontSize: 15,
    color: 'black',
  },
  button: {
    marginTop:2,
    height: 80,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
    buttonText: {
      marginLeft: 20,
      fontSize: 20,
      color: 'black',
    },
      });
