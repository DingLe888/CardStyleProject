/**
 * Created by dingle on 2017/3/14.
 */
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
    TouchableOpacity
} from 'react-native';

class Card extends Component {

    constructor(props){
        super(props)
    }

    static defaultProps = {
        num:0,
        data:{},
        selectedStateCode:0,
        cardClickCallBack:()=>{},

        cardWidth:0,
        cardHeight:0,
        cardNomalSpac:0,
        cardSmallSpac:0,
        cardNomalBaseTop:0,
        cardSmallBaseTop:0

    };


    render() {
        return (
            <TouchableOpacity style={[styles.opacity,{top: this.cardTop(),height:this.props.cardHeight,width:this.props.cardWidth}]}
                              activeOpacity = {1}
                              onPress={this.click.bind(this)}
            >
                <View style={[styles.cardStyle,{backgroundColor:this.props.data.cardColor,
            }]}>
                    <Text style={styles.title}>
                        {this.props.data.cardTitle}
                    </Text>

                    <Text style={styles.detail}>
                        {this.props.data.cardDetal}
                    </Text>

                </View>
            </TouchableOpacity>

        );
    }

    cardTop(){
        switch (this.props.selectedStateCode) {
            case 0:
                console.log('初始状态');
                return this.props.cardNomalBaseTop + this.props.num * this.props.cardNomalSpac;
                break;
            case 1:
                console.log('自我展示');
                return this.props.cardNomalBaseTop;
                break;
            case 2:
                return this.props.cardSmallBaseTop + this.props.num * this.props.cardSmallSpac;
                break;
        }
    }

    click(){
        this.props.cardClickCallBack(this.props.num);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    cardStyle:{
        flex:1,
        borderRadius:15,
        // shadowColor:'red',
        // shadowRadius:2,
        // shadowOpacity:0.6,

    },
    title:{
        fontSize:16,
        color:'#6435c9',
        textAlign:'center',
        fontStyle:'italic',// 字体
        letterSpacing:2,
        fontFamily:'Helvetica Neue',
        fontWeight:'400',
        marginHorizontal:20


    },
    detail:{
        fontSize:16,
        color:'#6435c9',
        textAlign:'center',
        fontStyle:'italic',// 字体
        letterSpacing:2,
        fontFamily:'Helvetica Neue',
        fontWeight:'400',
        marginTop:50,
    },
    opacity:{
        position:'absolute',
    }
});

export default Card