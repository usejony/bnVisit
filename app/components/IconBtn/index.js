import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import { scaleSize,setSpText } from '../../utils/fitSize';
export default class IconBtn extends Component {
    render() {
        return (
            <TouchableOpacity style={[styles.touch, this.props.style]} onPress={this.props.onPress} activeOpacity={0.6}>
                <Icon name={this.props.name ? this.props.name : 'ios-arrow-back'} size={this.props.size ? this.props.size : setSpText(30)} color={this.props.color ? this.props.color : '#fff'} />
            </TouchableOpacity>
        );
    }
}
IconBtn.propTypes = {
    name: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
    onPress: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    touch: {
        height: scaleSize(80),
        width: scaleSize(80),
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});