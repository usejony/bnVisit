import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import { setSpText } from '../../../../utils/fitSize';
import { showSearchModal } from '../../../../actions';

const CompanyHeader = ({ showSearchModal }) => (
    <View style={styles.header}>
        <TouchableOpacity onPress={() => showSearchModal()} activeOpacity={0.8} style={styles.input}>
            <View style={styles.box}>
                <Icon name="ios-search-outline" size={setSpText(16)} color="#aaa" />
                <Text style={styles.defaultText}>请输入搜索关键字</Text>
            </View>
        </TouchableOpacity>
    </View>
);

const styles = EStyleSheet.create({
    header: {
        height: setSpText(64),
        backgroundColor: '$themeColor',
        justifyContent: 'flex-end',
        paddingBottom: setSpText(10)
    },
    input: {
        marginHorizontal: setSpText(15),
        paddingHorizontal: setSpText(10),
        height: setSpText(26),
        backgroundColor: '#fff',
        borderRadius: setSpText(6)
    },
    box: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    defaultText: {
        fontSize: setSpText(12),
        color: '#aaa',
        marginLeft: setSpText(5)
    }
});

const mapDispatchToProps = dispatch => ({
    showSearchModal: () => dispatch(showSearchModal())
});

export default connect(null, mapDispatchToProps)(CompanyHeader);