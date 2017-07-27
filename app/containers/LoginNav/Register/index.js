import React, { Component } from 'react';
import {
    View,
    TextInput,
    PixelRatio
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import CustomBtn from '../../../components/customBtn';
import commonStyle from '../../../common/commonStyle';
import { scaleSize } from '../../../utils/fitSize';
export default class Register extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: '注册'
    })
    constructor(props) {
        super(props);
        this.state = {
            phone: ''
        }
    }

    phoneChange = (text) => {
        this.setState({
            phone: text
        });
    }

    onRegister = () => {
        return false
    }

    render() {
        return (
            <View style={commonStyle.container}>
                <View style={styles.box}>
                    <TextInput
                        style={styles.input}
                        value={this.state.phone}
                        keyboardType='numeric'
                        onChangeText={this.phoneChange}
                        placeholder='请输入您的手机号'
                    />
                </View>
                <CustomBtn title="获取验证码" tintColor="#fff" style={[commonStyle.loginBtn,styles.btn]} onPress={this.onRegister}/>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    box: {
        marginTop: scaleSize(50),
        width: '70%',
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: '#aaa',
        height: scaleSize(60),
        alignSelf: 'center'
    },
    input: {
        flex: 1,
        height: scaleSize(50),
        color: '#333',
        fontSize: scaleSize(30),
        paddingLeft: scaleSize(15)
    },
    btn: {
        height: scaleSize(60),
        width: '60%',
        alignSelf: 'center',
        marginTop: scaleSize(50)
    }
});
