/**
 * Created by dingle on 2017/3/14.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    LayoutAnimation,
    ScrollView,
    UIManager,
} from 'react-native';

import Card from './Card'
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;


const customAnimated = {
    customSpring: {
        duration: 400,
        create: {
            type: LayoutAnimation.Types.spring,
            property: LayoutAnimation.Properties.scaleXY,
            springDamping: 0.6
        },
        update: {
            type: LayoutAnimation.Types.easeInEaseOut
            // type: LayoutAnimation.Types.spring,
            // springDamping: 0.6
        }
    },
    customLinear: {
        duration: 400,
        create: {
            type: LayoutAnimation.Types.linear,
            property: LayoutAnimation.Properties.opacity,
        },
        update: {
            type: LayoutAnimation.Types.easeInEaseOut
        }
    }
};

 class CardView extends Component {

     cardWidth = DEVICE_WIDTH * 0.85; // 卡片宽度
     cardHeight = DEVICE_HEIGHT * 0.8; // 卡片高度

     cardNomalSpac = 50; // 正常状态下卡片之间的间隙
     cardNomalBaseTop = DEVICE_HEIGHT * 0.08;// 正常情况下卡片距离上部的距离

     cardSmallSpac = 20;// 压缩状态下卡片之间的间隙
     cardSmallBaseTop = DEVICE_HEIGHT * 0.9;// 压缩情况下卡片距离上部的距离

     _scrollView:ScrollView;


     constructor(props){
         super(props);
         this.state = {
             selectedCardNumber:-1,
             hasSelected:false
         };

         UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);//启用android Layout动画
     }

     static defaultProps = {
        data:[],
     };

    render() {

        var cards = this.props.data.map((card,index)=>{
            return(<Card
                key={index}
                data = {card}
                num = {index}
                selectedStateCode = {this.state.hasSelected ? index == this.state.selectedCardNumber ? 1:2 : 0 }
                cardClickCallBack = {this.cardClickCallBack.bind(this)}

                cardWidth = {this.cardWidth}
                cardHeight = {this.cardHeight}

                cardNomalSpac = {this.cardNomalSpac}
                cardSmallSpac = {this.cardSmallSpac}

                cardNomalBaseTop = {this.cardNomalBaseTop}
                cardSmallBaseTop = {this.cardSmallBaseTop}
            >

            </Card>)
        });

        return (
            <ScrollView style={styles.scroll}
                        contentContainerStyle = {styles.container}
                        ref = {(scrollview)=>{this._scrollView = scrollview}}
                        scrollEnabled={!this.state.hasSelected}
                        showsVerticalScrollIndicator = {false}
                    >

                   <View style={[styles.containerView,{height: this.containerViewHeight()}]}>
                       {cards}
                   </View>
            </ScrollView>
        );
    }

     cardClickCallBack(cardNumber){
         this._scrollView.scrollTo({x:0,y:0,animated:false});

         this.setState({

            hasSelected:!this.state.hasSelected,
            selectedCardNumber:!this.state.hasSelected ? cardNumber : -1,
        });

         LayoutAnimation.configureNext(customAnimated.customLinear)
     }

     containerViewHeight(){ // 获取容器透明视图的高度
         return (this.props.data.length-1)*this.cardNomalSpac + this.cardNomalBaseTop + this.cardHeight + 20
     }
}

const styles = StyleSheet.create({
    scroll:{
        flex: 1,
        backgroundColor: '#ffc',

    },
    container: {
        // flex: 1,
        backgroundColor: '#ffc',
        alignItems:'stretch'
    },
    containerView:{
        alignItems:'center',
    },


});

export default CardView