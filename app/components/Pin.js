import React, { Component } from 'react';
import { View,Text,StyleSheet } from 'react-native';

import {
  Back,
  Heart,
  More,
  PinIcon,
  Share
} from './util/icons';

export default class Pin extends Component {

  render(){
    return(
      <View style={styles.PinContainer}>

        {/*header*/}
        <View style={styles.PinHeader}>
          <View style={styles.UtilityNav}>
            <Back />
            <Heart />
            <Share />
            <More />
          </View>
          <View style={styles.PinButtonContainer}>
            <View style={styles.PinButton}>
              <PinIcon />
              <Text style={styles.PinButtonText}>
                Save
              </Text>
            </View>
          </View>
        </View>

        {/*la foto*/}
        <View style={styles.PinContent}>
          <Text style={styles.ImagePlaceHolder}>
            PlaceHolder
          </Text>
        </View>

        {/*el comentario*/}
        <View style={styles.PinMeta}>
          <View style={styles.PinMetaTextContainer}>
            <Text style={styles.PinMetaText}>Saved from</Text>
            <Text style={styles.PinMetaText}>website.com</Text>
          </View>

          {/**/}
          <View style={styles.PinButtonContainer}>
            <View style={styles.PinButton}>
              <Text style={styles.PinButtonText}>
                Visit
              </Text>
            </View>
          </View>
        </View>

          <View style={styles.PinUser}>
            <View style={styles.PinUserAvatar}>
              <Text>PlaceHolder</Text>
            </View>

            <View style={styles.PinUserContainer}>
              <Text style={styles.PinUserText}>
                <Text style={styles.TextBold}>User name </Text>
                 saved to
                <Text style={styles.TextBold}>GT</Text>
              </Text>
              <Text style={styles.PinUserText}>
                Description : Lorem Ipsum
              </Text>
            </View>
          </View>


      </View>
    )

  }

}

const styles = StyleSheet.create({
  PinContainer: {
    flex:1,
    backgroundColor:'#cecece',
    alignSelf:'stretch'

  },
  PinHeader: {
    backgroundColor:'white',
    flexDirection:'row',
    flex:1,
    alignItems:'flex-end',
    justifyContent:'space-between',
    padding:10

  },
  UtilityNav: {
    flexDirection:'row',
    backgroundColor:'yellow',
    justifyContent:'space-between',
    flex:5

  },
  PinButton:{
    flexDirection:'row',
    backgroundColor:'red',
    padding:8,
    borderRadius:6,
    justifyContent:'space-between',
    width:60
  },
  PinButtonContainer: {
    flexDirection:'row',
    backgroundColor:'white',
    flex:3,
    justifyContent:'flex-end'
  },
  PinButtonText: {
    color:'white'
  },
  PinContent: {
    backgroundColor:'#f9c9cc',
    flex:3,
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:8,
    paddingRight:8,
    paddingTop:8
  },
  ImagePlaceHolder: {
    backgroundColor:'#1e1e1e',
    flex:1,
    alignSelf:'stretch',
    borderRadius:7
  },
  PinMeta:{
    flexDirection:'row',
    flex:1,
    backgroundColor:'white'
  },
  PinUser:{
    flex:5,
    backgroundColor:'#cecece',
  }
});
