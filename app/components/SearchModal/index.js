import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StatusBar,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import IconBtn from '../IconBtn';
import commonStyle from '../../common/commonStyle.js';
import { setSpText } from '../../utils/fitSize.js';

export default class SearchModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    //textInput的受控
    _onChangeText = (text) => {
        this.setState({
            text
        })
    }

    //点击键盘的确定或搜索事件
    _onSubmitEditing = () => {
        //some code...
        return null;
    }
    render() {
        return (
            <View style={commonStyle.container}>
                <StatusBar animated={true} barStyle="default"/>
                <View style={styles.header}>
                    <View style={styles.inputBox}>
                        <IconBtn color={common.themeColor} onPress={() => this.props.closeModal()} />
                        <TextInput
                            style={styles.textInput}
                            autoFocus={true}
                            placeholder="请输入关键字"
                            clearButtonMode='always'
                            value={this.state.text}
                            onChangeText={this._onChangeText}
                            onSubmitEditing={this._onSubmitEditing}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    header: {
        height: setSpText(64),
        backgroundColor: '$themeBg',
    },
    inputBox: {
        height: setSpText(30),
        marginTop: setSpText(26),
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        height: setSpText(30),
        fontSize: setSpText(12),
        marginLeft: setSpText(10),
        marginRight: 40,
    },
});