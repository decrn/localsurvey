import { Button } from 'antd';
import React, { Component } from 'react';
import { BlockPicker, ColorResult } from 'react-color';

const defaultColors = [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4caf50',
    '#8bc34a',
    '#cddc39',
    '#ffeb3b',
    '#ffc107',
    '#ff9800',
    '#ff5722',
    '#795548',
    '#607d8b',
];

// TODO: make Colorpicker work inside a antd form

export class ColorPicker extends Component {
    state = {
        displayColorPicker: false,
        color: '#2196f3',
    };

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker });
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false });
    };

    handleChange = (color: ColorResult) => {
        this.setState({ color: color.hex });
    };

    render() {
        return (
            <>
                <Button onClick={this.handleClick} style={{ position: 'relative' }}>
                    <div
                        style={{
                            position: 'absolute',
                            top: '3px',
                            right: '3px',
                            bottom: '3px',
                            left: '3px',
                            background: this.state.color,
                        }}
                    />
                </Button>
                {this.state.displayColorPicker ? (
                    <div style={{ position: 'absolute', zIndex: 999, left: '-70px' }}>
                        <div onClick={this.handleClose} />
                        <BlockPicker color={this.state.color} colors={defaultColors} onChange={this.handleChange} />
                    </div>
                ) : null}
            </>
        );
    }
}
