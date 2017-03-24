/**
 * Created by dingle on 2017/3/24.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import styles from './Styles'
import ClickTimes from './ClickTime'

class RotateView extends Component{

    render(){
        return (
            <View style={styles.container}>
                <ClickTimes edgeLength={200} //边长
                            strokeWidth={5} // 线宽
                            strokeColor={'#453453'} // 圆底色
                            progressColor={'#2ea3f2'} // 进度条颜色
                            onProgressNumChange={(grogress)=>{console.log('当前百分比：【0~100】区间',grogress)}}//百分比响应函数
                />
            </View>
        )
    }
}

export default RotateView