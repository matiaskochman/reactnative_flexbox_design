/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import Pin from './app/components/Pin';

export default class App extends Component<{}> {

  constructor(props){
    super(props);

    this.state = {
      columns:2,
      pin:{
        hotel1:{
          imageSource:require('./app/images/hotel1.jpg'),
          originalWidth:337,
          originalHeight:450
        },
        haus:{
          imageSource:require('./app/images/haus.jpg'),
          originalWidth:1024,
          originalHeight:576
        }

      }
    }
  }

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.pinContainer}>
          <Pin pinSource={this.state.pin.hotel1} columns={this.state.columns}/>
          <Pin pinSource={this.state.pin.haus} columns={this.state.columns}/>
        </View>
        <View style={styles.pinContainer}>
          <Pin pinSource={this.state.pin.haus} columns={this.state.columns}/>
          <Pin pinSource={this.state.pin.hotel1} columns={this.state.columns}/>
        </View>
      </ScrollView>
    )

  }
}

const styles = StyleSheet.create({
  contentContainer:{
    flexDirection:'row'
  },
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  pinContainer:{
    flex:1,
    flexDirection:'column', //por default es column pero toma la direction del padre que es row
    alignSelf:'flex-start',
    alignItems:'flex-start'
  }
});
