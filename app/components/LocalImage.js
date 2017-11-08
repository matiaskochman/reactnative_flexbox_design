import React, {Component} from 'react';
import {Image,Dimensions} from 'react-native';

const LocalImage = ({source,originalWidth,originalHeight}) => {
  let windowWidth = Dimensions.get('window').width;

  // -16 because style is taking 16 px of padding
  let widthChange = (windowWidth - 16) / originalWidth;
  let newWidth = originalWidth * widthChange;

  let windowHeight = Dimensions.get('window').height;

  let newHeight = originalHeight * widthChange;

  return(
      <Image source={source} style={{width:newWidth,height:newHeight}}/>
  );
}

export default LocalImage;
