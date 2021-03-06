/**
 * Created by wenxin
 */
'use strict';

import {Platform, Dimensions, PixelRatio, StatusBar} from 'react-native';
import {pxToDp} from "../utils/ScreenUtil";

export default {
    screenHeight: Dimensions.get('window').height,
    screenWidth: Dimensions.get('window').width,
    mainColor: '#7e83e3',
    lineColor: '#DADADA',
    toolbar: {
        height: Platform.OS === 'android' ? pxToDp(90) : pxToDp(110),
    }
}