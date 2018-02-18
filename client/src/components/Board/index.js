import React, { Component } from 'react';
import './styles.css';
import Square from '../Square/index';
import Bishop from '../../models/Bishop';
import King from '../../models/King';
import Knight from '../../models/Knight';
import Queen from '../../models/Queen';
import Rook from '../../models/Rook';
import Pawn from '../../models/Pawn';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: []
        };
        this.letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        this.setSquares();
        this.setPieces();
        this.prevSquare = {};
        this.selectedPiece = null;
        this.piece = null;
    }

    setSquares() {
        for (let i = 0; i < 8; i++) {
            this.state.squares[i] = [];
            for (let j = 0; j < 8; j++) {
                this.state.squares[i][j] = <Square piece={null}/>;
            }
        }
    }

    setPieces() {
        this.state.squares[0][0] = <Square piece={new Rook('black')}/>;
        this.state.squares[0][1] = <Square piece={new Knight('black')}/>;
        this.state.squares[0][2] = <Square piece={new Bishop('black')}/>;
        this.state.squares[0][3] = <Square piece={new Queen('black')}/>;
        this.state.squares[0][4] = <Square piece={new King('black')}/>;
        this.state.squares[0][5] = <Square piece={new Bishop('black')}/>;
        this.state.squares[0][6] = <Square piece={new Knight('black')}/>;
        this.state.squares[0][7] = <Square piece={new Rook('black')}/>;

        for (let j = 0; j < 8; j++) {
            this.state.squares[1][j] = <Square piece={new Pawn('black')}/>;
        }

        this.state.squares[7][0] = <Square piece={new Rook('white')}/>;
        this.state.squares[7][1] = <Square piece={new Knight('white')}/>;
        this.state.squares[7][2] = <Square piece={new Bishop('white')}/>;
        this.state.squares[7][3] = <Square piece={new Queen('white')}/>;
        this.state.squares[7][4] = <Square piece={new King('white')}/>;
        this.state.squares[7][5] = <Square piece={new Bishop('white')}/>;
        this.state.squares[7][6] = <Square piece={new Knight('white')}/>;
        this.state.squares[7][7] = <Square piece={new Rook('white')}/>;

        for (let j = 0; j < 8; j++) {
            this.state.squares[6][j] = <Square piece={new Pawn('white')}/>;
        }
    }

    getSquareColour(i, j) {
        return ((i % 2 === 1 && j % 2 === 0) || (i % 2 === 0 && j % 2 === 1)) ? 'black' : 'white';
    }

    getPieceImg(piece) {
        if (piece) {
            return (
                <img className="piece-img" src={piece.img}/>
            )
        }
    }

    selectPiece(i, j, piece) {
        if (this.selectedPiece) {
            this.state.squares[i][j] = this.selectedPiece;
            this.state.squares[this.prevSquare.i][this.prevSquare.j] = <Square piece={null}/>;
            this.selectedPiece = null;
            this.prevSquare = {};
        } else {
            this.selectedPiece = this.state.squares[i][j];
            this.prevSquare = {
                i: i,
                j: j
            };
        }
        this.forceUpdate();
    }

    render() {
        return (
            <div className="board">
                {this.state.squares.map((row, i) => (
                    <div className="row" key={i}>
                        <div className="number" key={'number-' + i}>{8 - i}</div>
                        {row.map((piece, j) => (
                            <div 
                                className={'square ' + this.getSquareColour(i, j)}
                                key={i + ',' + j}
                            >
                                <div className="clickable" onClick={() => this.selectPiece(i, j, piece)}>{piece}</div>
                            </div>
                        ))}
                    </div>
                ))}
                <div className="letter-row-margin row">
                    {this.letters.map((letter, i) => (
                        <div className="letter" key={'letter-' + i}>{letter}</div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Board;
