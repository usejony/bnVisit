import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    Button,
    Modal
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import { scaleSize, setSpText } from '../../../utils/fitSize.js';
import commonStyle from '../../../common/commonStyle';
import { showSearchModal, closeSearchModal } from '../../../actions';
import CompanyHeader from './subpages/CompanyHeader';
import SearchModal from '../../../components/SearchModal';
import CompanyList from '../../../components/CompanyList';

class Company extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: () => <CompanyHeader />
    })
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <View style={commonStyle.container}>
                <StatusBar animated={true} barStyle="light-content" />
                 <CompanyList/> 
                <Modal visible={this.props.visible} animationType="fade">
                    <SearchModal closeModal={this.props.closeSearchModal} />
                </Modal>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    visible: state.ui.searchModal,
    
});

const mapDispatchToProps = dispatch => ({
    closeSearchModal: () => dispatch(closeSearchModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Company);