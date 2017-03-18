/**
 * Created by dingle on 2017/3/17.
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

import Task from './Task'
import SnapCarousel from './SnapCarousel'
import Example from './Example'

class Look extends Component{

    render(){

        return(
                <View style={styles.container}>
                    <Text style={styles.textStyle}
                          onPress={this.jumpToTask.bind(this)}>
                        点我看卡片轮播图
                    </Text>

                    <Text style={styles.textStyle}
                          onPress={this.jumpToSnapCarousel.bind(this)}>
                        点我看第三方卡片轮播图
                    </Text>

                    <Text style={styles.textStyle}
                          onPress={this.jumpToExample.bind(this)}>
                        点我看卡片堆叠
                    </Text>
                </View>
            )

    }

    jumpToTask(){
        console.log('跳转')
        this.props.navigator.push({
            component: Task, // 要跳转的版块
            passProps: {'url': 'www.baidu.com'},
            sceneConfig:Navigator.SceneConfigs.FloatFromBottom
        })
    }
    jumpToSnapCarousel(){
        this.props.navigator.push({
            component: SnapCarousel, // 要跳转的版块
            // passProps: {'url': 'www.baidu.com'},
            // sceneConfig:Navigator.SceneConfigs.FloatFromBottom
        })
    }

    jumpToExample(){
        this.props.navigator.push({
            component: Example, // 要跳转的版块
            // passProps: {'url': 'www.baidu.com'},
            // sceneConfig:Navigator.SceneConfigs.FloatFromBottom
        })
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue',
        alignItems:'center'
    },
    textStyle:{
        fontSize:30,
        fontWeight:'100',
        color:'#fff',
        marginTop:100,

    }

});

export default Look