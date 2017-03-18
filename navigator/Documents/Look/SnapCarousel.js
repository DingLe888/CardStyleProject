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
import Carousel from 'react-native-snap-carousel';

class SnapCarousel extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={{height:50,width:375}}>

                </View>
                <View style={{height:200,width:375}}>
                    <Carousel
                        ref={'carousel'}
                        sliderWidth={375}
                        itemWidth={300}
                        autoplay={false} // 自动轮播
                        autoplayDelay = {100} // 开始轮播之前的延时
                        autoplayInterval = {1000} // 轮播时间间隔
                        enableMomentum = {false}
                        firstItem = {5}
                        //inactiveSlideOpacity = {0.5} // 卡片变小后的透明度 0 ~ 1
                        inactiveSlideScale = {0.9} // 卡片变小后的尺寸缩放 0 ~ 1
                        // shouldOptimizeUpdates 减少更新策略，默认开始True
                        //swipeThreshold = {100}
                        onSnapToItem = {(x)=>{console.log(x)}} // 滑动到第几块
                        //containerCustomStyle={{marginBottom: 30}}
                        snapOnAndroid={true}
                        removeClippedSubviews={false}
                        slideStyle={{backgroundColor:'red'}}
                    >
                        <View style={styles.slide1} />
                        <Text style={styles.slide2} />
                        <Image style={styles.slide3} />
                        <View style={styles.slide1} />
                        <Text style={styles.slide2} />
                        <Image style={styles.slide3} />
                        <View style={styles.slide1} />
                        <Text style={styles.slide2} />
                        <Image style={styles.slide3} />
                        <View style={styles.slide1} />
                        <Text style={styles.slide2} />
                        <Image style={styles.slide3} />
                    </Carousel>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(23,45,122,1)'
    },
    carouselStyle:{

    },
    slide1:{
        backgroundColor:'#789',
        width:300,
        height:200,
    },
    slide2:{
        backgroundColor:'#918',
        width:300,
        height:200,
    },
    slide3:{
        backgroundColor:'#812',
        width:300,
        height:200,
    }
});

export default SnapCarousel