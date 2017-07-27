/**
 * custom button from du
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
    View,
    Text,
    TouchableOpacity,
 } from 'react-native';
 import EStyleSheet from 'react-native-extended-stylesheet';

 import { scaleSize } from '../../utils/fitSize.js';

 export default class CustomBtn extends Component {
     render() {
         return (
             <TouchableOpacity activeOpacity={this.props.activeOpacity ? this.props.activeOpacity : 0.6} onPress={this.props.onPress} style={[styles.btn,this.props.style]} disabled={this.props.disabled ? true : false}>
                 <Text style={{color: this.props.tintColor ? this.props.tintColor : '#333',fontSize: this.props.size ? this.props.size : scaleSize(30)}}>{this.props.title}</Text>
             </TouchableOpacity>
         );
     }
 }

 CustomBtn.propTypes = {
     onPress: PropTypes.func.isRequired,
     activeOpacity: PropTypes.number,
     tintColor: PropTypes.string,
     size: PropTypes.number,
     title: PropTypes.string.isRequired,
 }

 const styles = EStyleSheet.create({
    btn: {
        height: scaleSize(50),
        width: '80%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
 });