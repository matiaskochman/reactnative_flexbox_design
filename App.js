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
      <ScrollView style={styles.container}>
        <Pin pinSource={this.state.pin.hotel1}/>
        <Pin pinSource={this.state.pin.haus}/>
      </ScrollView>
    )

  }
}

const styles = StyleSheet.create({
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
});
