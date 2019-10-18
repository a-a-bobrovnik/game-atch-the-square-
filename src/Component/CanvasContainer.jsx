import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Stage, Layer, Rect, Text } from 'react-konva';
import { deleteFromArr, startGame, addToArr, resetPointArr, getRandomIntInclusive } from '../Redux/gameReducer';
import style from './Canvas.module.css';
import { BtnEsc } from './BtnEsc';


class CanvasContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.startGame()
    }
    componentDidUpdate() {
        setTimeout(() => {
            if (this.props.gameProps.gameArr.length < 20) {
                this.props.addToArr()
            }
        }, getRandomIntInclusive(2000, 4000));
        if (this.rect != null) {
            this.rect.to({
                y: window.innerWidth,
                duration: getRandomIntInclusive(6, 100)
            })
        }
    }
    render() {
        return (<div className={style.canvasWrap}>

            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Text text={'Очки:(' + this.props.gameProps.pointArr.length + ')'} fontSize={15} />

                    {this.props.gameProps.gameArr.map((e, i) => (
                        <Rect
                            ref={node => {
                                this.rect = node;
                            }}
                            key={i}
                            width={e.width}
                            height={e.height}
                            x={e.x * window.innerWidth}
                            y={0}
                            fill={e.color}
                            opacity={0.8}
                            shadowColor="black"
                            shadowBlur={10}
                            shadowOpacity={0.6}
                            onClick={() => { this.props.deleteFromArr(i) }}
                        />
                    ))}
                </Layer>
            </Stage>
            <BtnEsc resetPointArr={this.props.resetPointArr} />
        </div>
        );
    }
}
let mapStateToProps = (state) => {
    return {
        gameProps: state.gamePage
    }
}
export default connect(mapStateToProps, { deleteFromArr, startGame, addToArr, resetPointArr })
    (CanvasContainer)
