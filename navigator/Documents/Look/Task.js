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
    Dimensions,
    ScrollView
} from 'react-native';

import CardScrollView from './CardScrollView'
import CardScrollView2 from './CardScrollView2'

class Task extends Component{
    render(){
        return(
            <View style={styles.container}>

                    <CardScrollView
                        mHeight={200}
                    />
                <View
                    style={styles.scrollViewStyle}
                >
                    <CardScrollView2
                        mHeight = {200}
                    />
                </View>


            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#579',
        alignItems:'stretch',

    },

    scrollViewStyle:{
        height:200,
        marginTop:50,
    }
});

export default Task