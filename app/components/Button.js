'use strict'
import React, { Component } from 'react';
import { View,Text,StyleSheet } from 'react-native';

import {
  Back,
  Heart,
  More,
  PinIcon,
  Share
} from './util/icons';
import UtilityNavButton from './UtilityNavButton';

export default class Pin extends Component {

  render(){
    let bgColor = '#cecece';
    let textWeight = 'bold';
    let textColor = 'black';
    if(this.props.red){
      bgColor='red';
      textColor='white';
      textWeight = 'normal';
    } else{
      bgColor:'#cecece';
    }

    return(
      <View style={[styles.PinButton,{backgroundColor:bgColor}]}>
        <PinIcon />
        <Text style={[styles.PinButtonText,{fontWeight:textWeight,color:textColor}]}>{this.props.text}</Text>
      </View>
    )

  }

}

const styles = StyleSheet.create({

  PinButton:{
    flexDirection:'row',
    backgroundColor:'red',
    padding:8,
    borderRadius:6,
    justifyContent:'space-between',
    width:60
  },

  PinButtonText: {
    color:'white'
  },

});
