import React, { Component } from 'react';
import { 
    View,
    PixelRatio
 } from 'react-native';

 import { scaleSize } from '../../utils/fitSize.js';

 export default class  extends Component {
     render() {
         return (
             <View style={{height: 1 / PixelRatio.get(),backgroundColor: '#e6ebe7',marginHorizontal: scaleSize(15)}}/>
         );
     }
 }