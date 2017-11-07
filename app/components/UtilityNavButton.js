import React, { Component } from 'react';
import { View,Text,StyleSheet } from 'react-native';

import {
  Back,
  Heart,
  More,
  PinIcon,
  Share
} from './util/icons';


export default class UtilityNavButton extends Component {

  render(){
    switch (this.props.icon) {
      case "Back":
        return <Back />
        break;
      case "Heart":
        return <Heart />
        break;
      case "Share":
        return <Share />
        break;
      case "More":
        return <More />
        break;

      default:

    }

  }

}

const styles = StyleSheet.create({

});
