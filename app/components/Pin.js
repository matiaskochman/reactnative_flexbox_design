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
import Button from './Button';

export default class Pin extends Component {

  render(){
    return(
      <View style={styles.PinContainer}>

        {/*header*/}
        <View style={styles.PinHeader}>
          <View style={styles.UtilityNav}>
            <UtilityNavButton icon="Back"/>
            <UtilityNavButton icon="Heart"/>
            <UtilityNavButton icon="Share"/>
            <UtilityNavButton icon="More"/>

          </View>
          <View style={styles.PinButtonContainer}>
            <Button red icon text="Save"/>
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
            <Text style={[styles.PinMetaText,styles.TextBold]}>website.com</Text>
          </View>

          {/**/}
          <View style={styles.PinButtonContainer}>
            <Button text="Visit"/>
          </View>
        </View>

        {/*el usuario*/}
        <View style={styles.PinUser}>
          <View style={styles.PinUserAvatar}>

          </View>

          <View style={styles.PinUserContainer}>
            <Text style={styles.PinUserText}>
              <Text style={styles.TextBold}>User name </Text>
               saved to
              <Text style={styles.TextBold}> GT</Text>
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
    backgroundColor:'blue',
    flex:3,
    justifyContent:'flex-end',

  },
  PinButtonText: {
    color:'white'
  },
  PinContent: {
    backgroundColor:'#f9c9cc',
    flex:4.5,
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
    flex:0.8,
    backgroundColor:'white',
    paddingTop:14,
    paddingBottom:14,
    paddingRight:8,
    paddingLeft:8
  },
  PinMetaTextContainer:{
    flex:1,
    justifyContent:'space-around'
  },
  UtilityButton:{
    backgroundColor:'#cecece',
    justifyContent:'center',
    alignItems:'center',
    height:45
  },
  UtilityButtonText:{
    color:'black',
    fontWeight:'bold'
  },
  PinUser:{
    flex:5.5,
    backgroundColor:'#cecece',
    flexDirection:'row',
    paddingLeft:8,
    paddingRight:8
  },
  PinUserAvatar:{
    width:50,
    height:50,
    borderRadius:25,
    backgroundColor:'green',
    paddingLeft:8,
    paddingRight:8,
    marginRight:8
  },
  TextBold:{
    fontWeight:'bold'
  }
});
