import EStyleSheet from 'react-native-extended-stylesheet';
import { scaleSize } from '../utils/fitSize';

const commonStyle = EStyleSheet.create({
    loginBtn: {
        height: scaleSize(50),
        backgroundColor: '$themeColor'
    },
    container: {
        flex: 1,
        backgroundColor: '$themeBg'
    }
});

export default commonStyle;