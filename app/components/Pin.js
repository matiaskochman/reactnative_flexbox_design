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

        <View style={styles.PinContent}>
          <Text style={styles.ImagePlaceHolder}>
          </Text>
        </View>

        <View style={styles.PinMeta}>
          <View style={styles.PinMetaTextContainer}>
            <Text style={styles.PinMetaText}>Saved from</Text>
            <Text style={styles.PinMetaText}>website.com</Text>
          </View>

          <View style={styles.PinButtonContainer}>
            <View style={styles.PinButton}>
              <Text style={styles.PinButtonText}>
                Visit
              </Text>
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

      </View>
    )

  }

}

const styles = StyleSheet.create({
  PinContainer: {
    backgroundColor:'#c9c3c3',
    flexDirection:'column'

  },
  PinHeader: {
    flexDirection:'column',
    backgroundColor:'#d3bcbc'
  },
  UtilityNav: {
    flex: 5,
  },
  PinButton:{
    flex: 5,
  },
  PinButtonContainer: {
    flex: 5,
  },
  PinButtonText: {
    flex: 5,
  },
  PinContent: {
    flex: 5,
  },
  ImagePlaceHolder: {
    flex: 5,
  }
});
