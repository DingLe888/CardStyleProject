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

var _window = require('Dimensions').get('window');
var imageItemWidth = _window.width * 0.9;


class CardScrollView extends Component{

    contentItemRefs:[];
    srollView:ScrollView;

    constructor(props){
        super(props)
        this.state = {
            contentOffsetX:0
        }
    }

    static defaultProps = {
        mHeight:250,
    };

    componentDidMount() {
        this.srollView.scrollTo({x:_window.width * 5,y:0,animated:false})
    }
    render(){
        return(
            <View style={{height:this.props.mHeight}}>
                <ScrollView
                    ref={(scroll)=>this.srollView = scroll}
                    contentContainerStyle={styles.contentContainer}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={1}
                    onScroll = {this.onScrollAnimationEnd.bind(this)}>

                    {this.renderScrollItem()}
                </ScrollView>
            </View>

        )
    }

    renderScrollItem(){
        let items = [];
        let itemRefs = [];

        for (var i = 0;i < 10 ;i++){
            var imageRef:Image;
            var image = (
                <Image
                    ref={(img)=>imageRef = img}
                    style={[styles.imageItem,{height:this.getItemHeight(i)}]}
                    source={require('../../Source/calendar.png')}
                    resizeMode={'stretch'}
                    key = {i}>

                </Image>
            );
            items.push(image)
            itemRefs.push(imageRef)
        }
        this.contentItemRefs = itemRefs;
        return items
    }

    // 当一帧滚动结束的时候调用
    onScrollAnimationEnd(e){

        this.setState({
            contentOffsetX:e.nativeEvent.contentOffset.x
        });
    }

    getItemHeight(index){

        var abs = Math.abs(this.state.contentOffsetX - index * _window.width) / _window.width
        ;
        abs = abs>1 ? 1:abs;
        let height = this.props.mHeight - 0.3 * abs * this.props.mHeight;
        console.log('计算高度',height);
        return height

    }
}

const styles = StyleSheet.create({
    imageItem:{

        width:imageItemWidth,
        marginHorizontal:_window.width * 0.05,


},
    contentContainer: {
        alignItems:'center',
    },

});

export  default CardScrollView