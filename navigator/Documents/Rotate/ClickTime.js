/**
 * Created by dingle on 2017/3/23.
 */
/**
 * Created by dingle on 2017/3/23.
 */
import React, {Component, PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ART,
    PanResponder
} from 'react-native';

const {Surface, Shape, Path, Group, LinearGradient, Transform} = ART;


class ClickTime extends Component {

    static propTypes = {
        edgeLength: PropTypes.number.isRequired,
        strokeWidth: PropTypes.number.isRequired,
        strokeColor: PropTypes.string.isRequired,
        progressColor: PropTypes.string.isRequired,
    };

    begin={bgeinX:0,beginY:0};

    componentWillMount() {
        this._panResponder = PanResponder.create({
            // 要求成为响应者：
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

            onPanResponderGrant: (evt, gestureState) => {
                const touchX = evt.nativeEvent.locationX;
                const touchY = evt.nativeEvent.locationY;

                this.begin = {bgeinX: touchX, beginY: touchY};
                this.setState({
                    touchPoint: {x: touchX, y: touchY}
                })
            },
            onPanResponderMove: (evt, gestureState) => {
                this.setState({
                    touchPoint: {x: gestureState.dx + this.begin.bgeinX, y: gestureState.dy + this.begin.beginY}
                })

            },

        });
    }


    constructor(props) {
        super(props)

        this.state = {
            touchPoint: {x: this.props.edgeLength * 0.5, y: 0}
        };

        this.radius = this.props.edgeLength * 0.25;

    }

    render() {

        // console.log('render',this.state.touchPoint);
        const path = new Path()
            .moveTo(this.props.edgeLength * 0.5, this.props.edgeLength * 0.25)
            .arc(0, this.props.edgeLength * 0.5, 1)
            .arc(0, -this.props.edgeLength * 0.5, 1);

        var {endX, endY, sel} = this.calculationCrossPoint();

        const path2 = new Path()
            .push(`M100,50 A50,50 0 ${sel},1 ${endX},${endY}`);

        var linearGradient = new LinearGradient({
                '.1': 'blue', // blue in 1% position
                '1': 'rgba(255, 255, 255, 0)' // opacity white in 100% position
            },
            "0", "0", "0", "400"
        );
        var tra = new Transform().move(20, 20)
        return (
            <View style={{width:this.props.edgeLength,
                height:this.props.edgeLength,
                backgroundColor:'#eeeeee'}}
                {...this._panResponder.panHandlers}
            >
                <Surface width={this.props.edgeLength} height={this.props.edgeLength}>
                    <Group>
                        <Shape d={path}
                               stroke={this.props.strokeColor}
                               strokeWidth={this.props.strokeWidth}
                               strokeCap={"butt"} // 线头形状
                            

                        />
                        <Shape d={path2}
                               stroke={this.props.progressColor}
                               strokeWidth={this.props.strokeWidth}

                        />

                    </Group>
                </Surface>
            </View>
        )
    }

    calculationCrossPoint() {
        console.log('重新计算')
        const X = this.state.touchPoint.x;
        const Y = this.state.touchPoint.y;

        const centerX = this.props.edgeLength * 0.5;
        const centerY = centerX;

        const tanB = (Y - centerY) / (X - centerX);
        const HD = Math.atan(tanB); // 得弧度

        const sinB = Math.sin(HD);
        const cosB = Math.cos(HD);

        const addY = sinB * this.radius;
        const addX = cosB * this.radius;

        const endX = centerX + addX * (X < centerX ? -1 : 1);
        const endY = centerY + addY * (X < centerX ? -1 : 1);
        const sel = X < centerX ? 1 : 0;
        return {endX: String(endX), endY: String(endY), sel: String(sel)}

    }

}

export default ClickTime