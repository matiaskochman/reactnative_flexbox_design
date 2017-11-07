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
    return(
      <View style={styles.PinButton}>
        <PinIcon />
        <Text style={styles.PinButtonText}>Save</Text>
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
