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
                <ClickTimes edgeLength={200}
                            strokeWidth={5}
                            strokeColor={'#453453'}
                            progressColor={'#2ea3f2'}
                />
            </View>
        )
    }
}

export default RotateView