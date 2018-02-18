import React, { Component } from 'react';
import './styles.css';

export default class Square extends Component {
    constructor(props) {
        super(props);
    }
    
    getPieceImg() {
        if (this.props.piece) {
            return (
                <img className="piece-img" src={this.props.piece.img}/>
            )
        }
    }

    select() {
        this.props.piece = null;
    }

    render() {
        return (
            <div onClick={() => this.select()}>
                {this.getPieceImg()}
            </div>
        )
    }
}