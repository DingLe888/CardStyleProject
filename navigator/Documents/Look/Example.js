/**
 * Created by dingle on 2017/3/18.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator
} from 'react-native';

import CardUI from 'CardUI'
var data = require('../CardUI/cardData.json');
class Example extends Component{
    render(){
        console.log('1',CardUI);

        return (
            <View style={styles.container}>
                <CardUI
                data = {data}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#cccccc'

    },
    viewStyle:{
        height:250,
        marginTop:50,
        backgroundColor:'#aaaaaa'

    },
    itemStyle:{
        width: 375,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
});

export default Example